export const businessRulesDefaultValues = {
  minWall: 1,
  maxWall: 50,
  maxDoorAndWindowsPercent: 50,
  heightOfTheWallAboveTheDoor: 0.3,
  widthDoor: 0.8,
  heightDoor: 1.9,
  widthWindow: 2,
  heightWindow: 1.2,
  updatedAt: new Date('2022-10-08T01:46:53.946Z'),
}

export const paintCoverDefaultValue = {
  paintCover: 5,
  updatedAt: new Date('2022-10-08T01:46:53.946Z'),
}

export const paintSizes = [
  { id: 1, size: 18, count: 0 },
  { id: 2, size: 3.6, count: 0 },
  { id: 3, size: 2.5, count: 0 },
  { id: 4, size: 0.5, count: 0 },
]

export function initialBusinessRules(key: string) {
  const saved = localStorage.getItem(key)

  if (saved) {
    const initialValue = JSON.parse(saved || '')

    const initialValueWithDate = {
      ...initialValue,
      updatedAt: new Date(initialValue.updatedAt),
    }
    return initialValueWithDate
  } else return businessRulesDefaultValues
}

export function initialPaintCover(key: string) {
  const saved = localStorage.getItem(key)

  if (saved) {
    const initialValue = JSON.parse(saved || '')

    const initialValueWithDate = {
      ...initialValue,
      updatedAt: new Date(initialValue.updatedAt),
    }
    return initialValueWithDate
  } else return paintCoverDefaultValue
}
