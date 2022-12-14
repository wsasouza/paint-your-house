import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { toast } from 'react-toastify'

import {
  initialBusinessRules,
  paintSizes,
  initialPaintCover,
} from '../utils/initialValue'

export type BusinessRulesType = {
  minWall: number
  maxWall: number
  maxDoorAndWindowsPercent: number
  heightOfTheWallAboveTheDoor: number
  widthDoor: number
  heightDoor: number
  widthWindow: number
  heightWindow: number
  updatedAt: Date
}

export type Paint = {
  id: number
  size: number
  count: number
}

export type PaintCoverType = {
  paintCover: number
  updatedAt: Date
}

interface BusinessRulesContextType {
  businessRules: BusinessRulesType
  paintCover: PaintCoverType
  paintCanSizes: Paint[]
  updateBusinessRules: (data: Omit<BusinessRulesType, 'updatedAt'>) => void
  updatePaintCover: (data: Omit<PaintCoverType, 'updatedAt'>) => void
}

interface BusinessRulesProviderProps {
  children: ReactNode
}

export const BusinessRulesContext = createContext(
  {} as BusinessRulesContextType,
)

const BUSINESS_RULES = '@PaintYourHouse:BusinessRules'
const PAINT_COVER = '@PaintYourHouse:PaintCover'

export function BusinessRulesProvider({
  children,
}: BusinessRulesProviderProps) {
  const [businessRules, setBusinessRules] = useState<BusinessRulesType>(
    initialBusinessRules(BUSINESS_RULES),
  )

  const [paintCover, setPaintCover] = useState<PaintCoverType>(
    initialPaintCover(PAINT_COVER),
  )

  const [paintCanSizes] = useState<Paint[]>(paintSizes)

  const updateBusinessRules = useCallback(
    (data: Omit<BusinessRulesType, 'updatedAt'>) => {
      const {
        minWall,
        maxWall,
        maxDoorAndWindowsPercent,
        heightOfTheWallAboveTheDoor,
        widthDoor,
        heightDoor,
        widthWindow,
        heightWindow,
      } = data

      const updatedRules = {
        minWall,
        maxWall,
        maxDoorAndWindowsPercent,
        heightOfTheWallAboveTheDoor,
        widthDoor,
        heightDoor,
        widthWindow,
        heightWindow,
        updatedAt: new Date(),
      }

      setBusinessRules(updatedRules)
      toast.info('Regras de c??lculo de tinta foram atualizadas.')
    },
    [],
  )

  const updatePaintCover = useCallback(
    (data: Omit<PaintCoverType, 'updatedAt'>) => {
      const { paintCover } = data

      const updateCover = {
        paintCover,
        updatedAt: new Date(),
      }

      setPaintCover(updateCover)
      toast.info('Regra de rendimento de tinta foi atualizada.')
    },
    [],
  )

  useEffect(() => {
    localStorage.setItem(BUSINESS_RULES, JSON.stringify(businessRules))
  }, [businessRules])

  useEffect(() => {
    localStorage.setItem(PAINT_COVER, JSON.stringify(paintCover))
  }, [paintCover])

  return (
    <BusinessRulesContext.Provider
      value={{
        paintCover,
        paintCanSizes,
        businessRules,
        updateBusinessRules,
        updatePaintCover,
      }}
    >
      {children}
    </BusinessRulesContext.Provider>
  )
}
