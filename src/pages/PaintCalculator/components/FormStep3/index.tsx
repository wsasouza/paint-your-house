import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ArrowLeft, ArrowRight, Plus, XSquare } from 'phosphor-react'

import { useBusinessRules } from '../../../../hooks/useBusinessRules'
import { usePaintCalcAreas } from '../../../../hooks/usePaintCalcAreas'
import { usePaintCalcFormControls } from '../../../../hooks/usePaintCalcFormControls'

import {
  PaintCalculatorActionButton,
  PaintCalculatorNavLinkButton,
  StepActionContainer,
  StepContainer,
  StepContainerHeader,
  StepContainerItemInput,
  StepContainerTitle,
  StopFormButton,
} from '../../styles'

interface FormStepInputs {
  height: number
  width: number
  doors: number
  windows: number
}

const formStepInputsSchema = yup.object({
  height: yup.number().required(),
  width: yup.number().required(),
  doors: yup.number().default(0),
  windows: yup.number().default(0),
})

export function FormStep3() {
  const { wallArea3, updateWallArea3 } = usePaintCalcAreas()
  const { calculateWallArea } = useBusinessRules()
  const { formCancel } = usePaintCalcFormControls()

  const { register, handleSubmit } = useForm<FormStepInputs>({
    resolver: yupResolver(formStepInputsSchema),
  })

  const handleStepFormSubmit = (data: FormStepInputs) => {
    const { height, width, doors, windows } = data

    const wallData = {
      height,
      width,
      doors,
      windows,
    }

    const area = calculateWallArea(wallData)

    if (area > 0) {
      const wallDataOk = {
        height,
        width,
        doors,
        windows,
        wallArea: area,
      }

      updateWallArea3(wallDataOk)
    }
  }

  return (
    <StepContainer>
      <StepContainerHeader>
        <StepContainerTitle>Parede 3/4</StepContainerTitle>
        <StopFormButton title="Cancelar" onClick={formCancel}>
          <XSquare size={22} weight="regular" />
        </StopFormButton>
      </StepContainerHeader>

      <form onSubmit={handleSubmit(handleStepFormSubmit)}>
        <StepContainerItemInput>
          <label htmlFor="height">Altura:</label>
          <div>
            <input
              id="height"
              autoFocus
              type="number"
              min="0.1"
              max="10"
              step="0.01"
              {...register('height', {
                value: Number(wallArea3.height.toFixed(2)),
              })}
              required
            />
            <span>m</span>
          </div>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="width">Comprimento:</label>
          <div>
            <input
              id="width"
              type="number"
              min="0.1"
              max="50"
              step="0.01"
              {...register('width', {
                value: Number(wallArea3.width.toFixed(2)),
              })}
              required
            />
            <span>m</span>
          </div>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="doors">Portas:</label>
          <div>
            <input
              id="doors"
              type="number"
              min="0"
              max="10"
              step="1"
              {...register('doors', {
                value: wallArea3.doors,
              })}
            />
            <span>un</span>
          </div>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="windows">Janelas:</label>
          <div>
            <input
              id="windows"
              type="number"
              min="0"
              max="10"
              step="1"
              {...register('windows', {
                value: wallArea3.windows,
              })}
            />
            <span>un</span>
          </div>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="">??rea da parede 3:</label>
          <div>
            <input
              type="text"
              value={wallArea3.wallArea.toFixed(2).replace('.', ',')}
              readOnly
            />
            <span>m</span>
          </div>
        </StepContainerItemInput>

        <StepActionContainer>
          <PaintCalculatorNavLinkButton to={'/paint-calculator/step2'}>
            <ArrowLeft size={16} weight="duotone" />
            Anterior
          </PaintCalculatorNavLinkButton>
          {wallArea3.wallArea ? (
            <PaintCalculatorNavLinkButton to={'/paint-calculator/step4'}>
              Pr??ximo
              <ArrowRight size={16} weight="duotone" />
            </PaintCalculatorNavLinkButton>
          ) : (
            <PaintCalculatorActionButton type="submit">
              <Plus size={16} weight="duotone" /> Adicionar
            </PaintCalculatorActionButton>
          )}
        </StepActionContainer>
      </form>
    </StepContainer>
  )
}
