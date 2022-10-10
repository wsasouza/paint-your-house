export const defaultValues = {
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

export function initialBusinessRules(rules: string) {
  const saved = localStorage.getItem(rules)

  if (saved) {
    const initialValue = JSON.parse(saved || '')

    const initialValueWithDate = {
      ...initialValue,
      updatedAt: new Date(initialValue.updatedAt),
    }
    return initialValueWithDate
  } else return defaultValues
}
