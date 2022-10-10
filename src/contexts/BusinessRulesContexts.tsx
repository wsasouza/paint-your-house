import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { initialBusinessRules } from '../utils/initialValue'

export interface BusinessRules {
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

export interface UpdateBusinessRules {
  minWall: number
  maxWall: number
  maxDoorAndWindowsPercent: number
  heightOfTheWallAboveTheDoor: number
  widthDoor: number
  heightDoor: number
  widthWindow: number
  heightWindow: number
}

interface BusinessRulesContextType {
  businessRules: BusinessRules
  updateBusinessRules: (data: UpdateBusinessRules) => void
}

interface BusinessRulesProviderProps {
  children: ReactNode
}

export const BusinessRulesContext = createContext(
  {} as BusinessRulesContextType,
)

const BUSINESS_RULES = '@PaintYourHouse:BusinessRules'

export function BusinessRulesProvider({
  children,
}: BusinessRulesProviderProps) {
  const [businessRules, setBusinessRules] = useState<BusinessRules>(
    initialBusinessRules(BUSINESS_RULES),
  )

  function updateBusinessRules(data: UpdateBusinessRules) {
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
  }

  useEffect(() => {
    localStorage.setItem(BUSINESS_RULES, JSON.stringify(businessRules))
  }, [businessRules])

  return (
    <BusinessRulesContext.Provider
      value={{
        businessRules,
        updateBusinessRules,
      }}
    >
      {children}
    </BusinessRulesContext.Provider>
  )
}
