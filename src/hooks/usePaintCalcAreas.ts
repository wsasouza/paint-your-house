import { useContextSelector } from 'use-context-selector'
import { PaintCalculatorContext } from '../contexts/PaintCalculatorContexts'

export function usePaintCalcAreas() {
  const name = useContextSelector(PaintCalculatorContext, (context) => {
    return context.name
  })

  const updateName = useContextSelector(PaintCalculatorContext, (context) => {
    return context.updateName
  })

  const wallArea1 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.wallArea1
  })

  const wallArea2 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.wallArea2
  })

  const wallArea3 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.wallArea3
  })

  const wallArea4 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.wallArea4
  })

  const areaTotal =
    wallArea1.wallArea +
    wallArea2.wallArea +
    wallArea3.wallArea +
    wallArea4.wallArea

  const updateWallArea1 = useContextSelector(
    PaintCalculatorContext,
    (context) => {
      return context.updateWallArea1
    },
  )

  const updateWallArea2 = useContextSelector(
    PaintCalculatorContext,
    (context) => {
      return context.updateWallArea2
    },
  )

  const updateWallArea3 = useContextSelector(
    PaintCalculatorContext,
    (context) => {
      return context.updateWallArea3
    },
  )

  const updateWallArea4 = useContextSelector(
    PaintCalculatorContext,
    (context) => {
      return context.updateWallArea4
    },
  )

  return {
    name,
    wallArea1,
    wallArea2,
    wallArea3,
    wallArea4,
    areaTotal,
    updateName,
    updateWallArea1,
    updateWallArea2,
    updateWallArea3,
    updateWallArea4,
  }
}
