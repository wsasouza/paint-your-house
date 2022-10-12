import { useContext } from 'react'

import { FormContext } from '../contexts/FormContext'

export function useForm() {
  const context = useContext(FormContext)

  if (context === undefined)
    throw new Error('useForm needs to be used inside the FormProvider')

  return context
}
