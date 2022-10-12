import { createContext } from 'react'

import { Action } from '../@types/Action'
import { State } from '../@types/State'

type ContextType = {
  state: State
  dispatch: (action: Action) => void
}

export const FormContext = createContext<ContextType | undefined>(undefined)
