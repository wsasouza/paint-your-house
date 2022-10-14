import { ReactNode, useReducer } from 'react'

import { FormContext } from '../contexts/FormContext'
import { FormReducer } from '../reducers/FormReducer'

import { State } from '../@types/State'

interface FormProviderProps {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  height1: 0,
  width1: 0,
  doors1: 0,
  windows1: 0,
  height2: 0,
  width2: 0,
  doors2: 0,
  windows2: 0,
  height3: 0,
  width3: 0,
  doors3: 0,
  windows3: 0,
  height4: 0,
  width4: 0,
  doors4: 0,
  windows4: 0,
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
