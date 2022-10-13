import { ReactNode, useReducer } from 'react'

import { FormContext } from '../contexts/FormContext'
import { FormReducer } from '../reducers/FormReducer'

import { State } from '../@types/State'

interface IFormProviderProps {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  wall1: 0,
  wall2: 0,
  wall3: 0,
  wall4: 0,
}

export const FormProvider = ({ children }: IFormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
