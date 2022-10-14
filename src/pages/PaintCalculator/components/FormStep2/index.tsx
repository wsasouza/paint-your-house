import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SkipForward, XSquare } from 'phosphor-react'

import { useBusinessRules } from '../../../../hooks/useBusinessRules'
import { usePaintCalcAreas } from '../../../../hooks/usePaintCalcAreas'
import { usePaintCalcFormControls } from '../../../../hooks/usePaintCalcFormControls'

import {
  PaintCalculatorActionButton,
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

export function FormStep2() {
  const { wallArea2, updateWallArea2 } = usePaintCalcAreas()
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

      updateWallArea2(wallDataOk)
    }
  }

  return (
    <StepContainer>
      <StepContainerHeader>
        <StepContainerTitle>Parede 2/4</StepContainerTitle>
        <StopFormButton title="Cancelar" onClick={formCancel}>
          <XSquare size={22} weight="regular" />
        </StopFormButton>
      </StepContainerHeader>

      <form onSubmit={handleSubmit(handleStepFormSubmit)}>
        <StepContainerItemInput>
          <label htmlFor="height">Altura:</label>
          <input
            id="height"
            autoFocus
            type="number"
            min="0.1"
            max="10"
            step="0.01"
            {...register('height', {
              value: Number(wallArea2.height.toFixed(2)),
            })}
            required
          />
          <span>m</span>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="width">Comprimento:</label>
          <input
            id="width"
            type="number"
            min="0.1"
            max="50"
            step="0.01"
            {...register('width', {
              value: Number(wallArea2.width.toFixed(2)),
            })}
            required
          />
          <span>m</span>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="doors">Portas:</label>
          <input
            id="doors"
            type="number"
            min="0"
            max="10"
            step="1"
            {...register('doors', {
              value: wallArea2.doors,
            })}
          />
          <span>un</span>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="windows">Janelas:</label>
          <input
            id="windows"
            type="number"
            min="0"
            max="10"
            step="1"
            {...register('windows', {
              value: wallArea2.windows,
            })}
          />
          <span>un</span>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="">Área da parede 2:</label>
          <input type="text" value={wallArea2.wallArea.toFixed(2)} readOnly />
          <span>m</span>
        </StepContainerItemInput>
        <PaintCalculatorActionButton type="submit">
          <SkipForward size={16} weight="duotone" /> Próximo
        </PaintCalculatorActionButton>
      </form>
    </StepContainer>
  )
}
