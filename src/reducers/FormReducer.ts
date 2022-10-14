import { FormActions } from '../enums/FormActions'

import { Action } from '../@types/Action'
import { State } from '../@types/State'

export const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }

    case FormActions.setName:
      return { ...state, name: action.payload }

    case FormActions.setHeight1:
      return { ...state, height1: action.payload }

    case FormActions.setWidth1:
      return { ...state, width1: action.payload }

    case FormActions.setDoors1:
      return { ...state, doors1: action.payload }

    case FormActions.setWindows1:
      return { ...state, windows1: action.payload }

    case FormActions.setHeight2:
      return { ...state, height2: action.payload }

    case FormActions.setWidth2:
      return { ...state, width2: action.payload }

    case FormActions.setDoors2:
      return { ...state, doors2: action.payload }

    case FormActions.setWindows2:
      return { ...state, windows2: action.payload }

    case FormActions.setHeight3:
      return { ...state, height3: action.payload }

    case FormActions.setWidth3:
      return { ...state, width3: action.payload }

    case FormActions.setDoors3:
      return { ...state, doors3: action.payload }

    case FormActions.setWindows3:
      return { ...state, windows3: action.payload }

    case FormActions.setHeight4:
      return { ...state, height4: action.payload }

    case FormActions.setWidth4:
      return { ...state, width4: action.payload }

    case FormActions.setDoors4:
      return { ...state, doors4: action.payload }

    case FormActions.setWindows4:
      return { ...state, windows4: action.payload }

    default:
      return state
  }
}
