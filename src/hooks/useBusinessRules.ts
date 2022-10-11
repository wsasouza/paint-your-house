import { useContextSelector } from 'use-context-selector'

import { BusinessRulesContext } from '../contexts/BusinessRulesContexts'

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

  return {
    businessRules,
    updateBusinessRules,
  }
}
