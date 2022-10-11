import { useContextSelector } from 'use-context-selector'

import { BusinessRulesContext } from '../contexts/BusinessRulesContexts'

export function usePaintRules() {
  const paintCoverRule = useContextSelector(BusinessRulesContext, (context) => {
    return context.paintCover
  })

  const updatePaintCoverRule = useContextSelector(
    BusinessRulesContext,
    (context) => {
      return context.updatePaintCover
    },
  )

  const paintCanSizesRules = useContextSelector(
    BusinessRulesContext,
    (context) => {
      return context.paintCanSizes
    },
  )

  return {
    paintCoverRule,
    updatePaintCoverRule,
    paintCanSizesRules,
  }
}
