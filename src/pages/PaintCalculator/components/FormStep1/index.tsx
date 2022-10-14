import { useEffect } from 'react'
import { useForm as useReactHookForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useOutletContext } from 'react-router-dom'
import { SkipForward, XSquare } from 'phosphor-react'

import { ContextType } from '../../../../layouts/StepFormLayout'
import { useForm } from '../../../../hooks/useForm'
import { FormActions } from '../../../../enums/FormActions'
import { useBusinessRules } from '../../../../hooks/useBusinessRules'

import {
  PaintCalculatorActionButton,
  StepContainer,
  StepContainerHeader,
  StepContainerItemInput,
  StepContainerTitle,
  StopFormButton,
} from '../../styles'
import { NameInput } from './styles'

interface FormStep1Inputs {
  name: string
  height1: number
  width1: number
  doors1: number
  windows1: number
}

const formStep1InputsSchema = yup.object({
  name: yup.string().min(3).required(),
  height1: yup.number().required(),
  width1: yup.number().required(),
  doors1: yup.number().default(0),
  windows1: yup.number().default(0),
})

export function FormStep1() {
  const { handleStopForm } = useOutletContext<ContextType>()
  const { calculateWallArea } = useBusinessRules()

  const { register, handleSubmit } = useReactHookForm({
    resolver: yupResolver(formStep1InputsSchema),
  })

  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  }, [dispatch])

  const nameChange = (name: string) => {
    dispatch({
      type: FormActions.setName,
      payload: name,
    })
  }

  const height1Change = (height1: number) => {
    dispatch({
      type: FormActions.setHeight1,
      payload: height1,
    })
  }

  const width1Change = (width1: number) => {
    dispatch({
      type: FormActions.setWidth1,
      payload: width1,
    })
  }

  const doors1Change = (doors1: number) => {
    dispatch({
      type: FormActions.setDoors1,
      payload: doors1,
    })
  }

  const windows1Change = (windows1: number) => {
    dispatch({
      type: FormActions.setWindows1,
      payload: windows1,
    })
  }

  const handleStepForm1Submit = (data: FormStep1Inputs) => {
    const { name, height1, width1, doors1, windows1 } = data

    nameChange(name)

    const calcAreaData = {
      height: height1,
      width: width1,
      doors: doors1,
      windows: windows1,
    }

    const area = calculateWallArea(calcAreaData)
    console.log(area)

    if (area > 0) {
      height1Change(height1)
      width1Change(width1)
      doors1Change(doors1)
      windows1Change(windows1)
    }
  }

  // const handleNextStep: SubmitHandler<FormStep1Inputs> = (
  //   data: FormStep1Inputs,
  // ) => {
  //   stepForm1Submit(data)
  // }
  console.log(
    state.name,
    state.height1,
    state.width1,
    state.doors1,
    state.windows1,
  )

  return (
    <StepContainer>
      <StepContainerHeader>
        <StepContainerTitle>Parede 1/4</StepContainerTitle>
        <StopFormButton title="Cancelar" onClick={handleStopForm}>
          <XSquare size={22} weight="regular" />
        </StopFormButton>
      </StepContainerHeader>

      <NameInput>
        <label htmlFor="">Cômodo:</label>
        <input
          autoFocus
          type="text"
          placeholder="Digite o nome do cômodo"
          {...register('name', {
            value: `${state.name !== '' ? state.name : ''}`,
          })}
          required
        />
      </NameInput>
      <StepContainerItemInput>
        <label htmlFor="">Altura:</label>
        <input
          type="number"
          min="0.1"
          max="10"
          step="0.01"
          placeholder="0,00"
          {...register('height1', {
            value: `${state.height1 > 0 ? state.height1 : ''}`,
          })}
          required
        />
        <span>m</span>
      </StepContainerItemInput>
      <StepContainerItemInput>
        <label htmlFor="">Comprimento:</label>
        <input
          type="number"
          min="0.1"
          max="50"
          step="0.01"
          placeholder="0,00"
          {...register('width1', {
            value: `${state.width1 > 0 ? state.width1 : ''}`,
          })}
          required
        />
        <span>m</span>
      </StepContainerItemInput>
      <StepContainerItemInput>
        <label htmlFor="">Portas:</label>
        <input
          type="number"
          min="0"
          max="10"
          step="1"
          placeholder="0"
          {...register('doors1', {
            value: `${state.doors1 >= 0 ? state.doors1 : ''}`,
          })}
        />
        <span>un</span>
      </StepContainerItemInput>
      <StepContainerItemInput>
        <label htmlFor="">Janelas:</label>
        <input
          type="number"
          min="0"
          max="10"
          step="1"
          placeholder="0"
          {...register('windows1', {
            value: `${state.windows1 >= 0 ? state.windows1 : ''}`,
          })}
        />
        <span>un</span>
      </StepContainerItemInput>
      <PaintCalculatorActionButton
        onClick={handleSubmit(handleStepForm1Submit)}
      >
        <SkipForward size={16} weight="duotone" /> Próximo
      </PaintCalculatorActionButton>
    </StepContainer>
  )
}
