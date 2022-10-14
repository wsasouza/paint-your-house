import { useContextSelector } from 'use-context-selector'
import { PaintCalculatorContext } from '../contexts/PaintCalculatorContexts'

export function PaintCalculatorAreas() {
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
    wallArea1,
    wallArea2,
    wallArea3,
    wallArea4,
    updateWallArea1,
    updateWallArea2,
    updateWallArea3,
    updateWallArea4,
  }
}
