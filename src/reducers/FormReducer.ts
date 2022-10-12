import { FormActions } from '../enums/FormActions'

import { Action } from '../@types/Action'
import { State } from '../@types/State'

export const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }

    case FormActions.setWall1:
      return { ...state, wall1: action.payload }

    case FormActions.setWall2:
      return { ...state, wall2: action.payload }

    case FormActions.setWall3:
      return { ...state, wall3: action.payload }

    case FormActions.setWall4:
      return { ...state, wall4: action.payload }

    default:
      return state
  }
}
