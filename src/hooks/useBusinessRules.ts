import { useContextSelector } from 'use-context-selector'
import { toast } from 'react-toastify'

import { BusinessRulesContext } from '../contexts/BusinessRulesContexts'
import { WallAreaInputs } from '../@types/WallAreaInput'

interface MaxDoorAndWindowsProps {
  area: number
  areaDoorAndWindows: number
  maxDoorAndWindowsPercent: number
}

export function useBusinessRules() {
  const businessRules = useContextSelector(BusinessRulesContext, (context) => {
    return context.businessRules
  })

  const updateBusinessRules = useContextSelector(
    BusinessRulesContext,
    (context) => {
      return context.updateBusinessRules
    },
  )

  function maxDoorAndWindows(data: MaxDoorAndWindowsProps): boolean {
    const { area, areaDoorAndWindows, maxDoorAndWindowsPercent } = data

    const percentDoorAndWindows = (areaDoorAndWindows * 100) / area

    if (percentDoorAndWindows > maxDoorAndWindowsPercent) {
      toast.error('Área máxima da portas e janelas atingida.')
      return false
    } else {
      return true
    }
  }

  const calculateWallArea = (data: WallAreaInputs): number => {
    const { height, width, doors, windows } = data
    const {
      minWall,
      maxWall,
      heightOfTheWallAboveTheDoor,
      maxDoorAndWindowsPercent,
      heightDoor,
      heightWindow,
      widthDoor,
      widthWindow,
    } = businessRules

    const areaOneDoor = heightDoor * widthDoor
    const areaOneWindow = heightWindow * widthWindow
    const wallAboveTheDoor = heightOfTheWallAboveTheDoor + heightDoor

    const area = height * width

    const areaDoor = areaOneDoor * doors
    const areaWindows = areaOneWindow * windows
    const areaDoorAndWindows = areaDoor + areaWindows

    if (area < minWall) {
      toast.error('Área mínima da parede não atingida.')
      return -1
    }

    if (area > maxWall) {
      toast.error('Área máxima da parede atingida.')
      return -1
    }

    if (doors && height < wallAboveTheDoor) {
      toast.error('Altura mínima da parede com porta não atingida.')
      return -1
    }

    const maxDoorAndWindowsData = {
      area,
      areaDoorAndWindows,
      maxDoorAndWindowsPercent,
    }

    const maxDoorAndWindowsValid = maxDoorAndWindows(maxDoorAndWindowsData)

    if (!maxDoorAndWindowsValid) {
      return -1
    }

    const wallArea = area - areaDoorAndWindows

    return wallArea
  }

  return {
    businessRules,
    updateBusinessRules,
    calculateWallArea,
  }
}
