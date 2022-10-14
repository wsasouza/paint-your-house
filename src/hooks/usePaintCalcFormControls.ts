import { useContextSelector } from 'use-context-selector'
import { PaintCalculatorContext } from '../contexts/PaintCalculatorContexts'

export function usePaintCalcFormControls() {
  const startForm = useContextSelector(PaintCalculatorContext, (context) => {
    return context.startForm
  })

  const formInit = useContextSelector(PaintCalculatorContext, (context) => {
    return context.formInit
  })

  const formCancel = useContextSelector(PaintCalculatorContext, (context) => {
    return context.formCancel
  })

  const formStep1 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.formStep1
  })

  const formStep2 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.formStep2
  })

  const formStep3 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.formStep3
  })

  const formStep4 = useContextSelector(PaintCalculatorContext, (context) => {
    return context.formStep4
  })

  return {
    startForm,
    formInit,
    formCancel,
    formStep1,
    formStep2,
    formStep3,
    formStep4,
  }
}
