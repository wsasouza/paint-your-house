import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ArrowRight, Plus, XSquare } from 'phosphor-react'

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
import { NameInput } from './styles'

interface FormStepInputs {
  name: string
  height: number
  width: number
  doors: number
  windows: number
}

const formStepInputsSchema = yup.object({
  name: yup.string().min(3).required(),
  height: yup.number().required(),
  width: yup.number().required(),
  doors: yup.number().default(0),
  windows: yup.number().default(0),
})

export function FormStep1() {
  const { name, updateName, wallArea1, updateWallArea1 } = usePaintCalcAreas()
  const { calculateWallArea } = useBusinessRules()
  const { formCancel } = usePaintCalcFormControls()

  const { register, handleSubmit } = useForm<FormStepInputs>({
    resolver: yupResolver(formStepInputsSchema),
  })

  const handleStepFormSubmit = (data: FormStepInputs) => {
    const { name, height, width, doors, windows } = data

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
      updateName(name)

      updateWallArea1(wallDataOk)
    }
  }

  return (
    <StepContainer>
      <StepContainerHeader>
        <StepContainerTitle>Parede 1/4</StepContainerTitle>
        <StopFormButton title="Cancelar" onClick={formCancel}>
          <XSquare size={22} weight="regular" />
        </StopFormButton>
      </StepContainerHeader>

      <form onSubmit={handleSubmit(handleStepFormSubmit)}>
        <NameInput>
          <label htmlFor="name">Cômodo:</label>
          <input
            id="name"
            autoFocus
            type="text"
            placeholder="Digite o nome do cômodo"
            {...register('name', {
              value: `${name !== '' ? name : ''}`,
            })}
            required
          />
        </NameInput>
        <StepContainerItemInput>
          <label htmlFor="height">Altura:</label>
          <input
            id="height"
            type="number"
            min="0.1"
            max="10"
            step="0.01"
            placeholder="0,00"
            {...register('height', {
              value: Number(
                `${wallArea1.height !== 0 ? wallArea1.height : ''}`,
              ),
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
            placeholder="0,00"
            {...register('width', {
              value: Number(`${wallArea1.width > 0 ? wallArea1.width : ''}`),
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
            placeholder="0"
            {...register('doors', {
              value: Number(`${wallArea1.doors >= 0 ? wallArea1.doors : ''}`),
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
            placeholder="0"
            {...register('windows', {
              value: Number(
                `${wallArea1.windows >= 0 ? wallArea1.windows : ''}`,
              ),
            })}
          />
          <span>un</span>
        </StepContainerItemInput>
        <StepContainerItemInput>
          <label htmlFor="">Área da parede 1:</label>
          <input type="number" value={wallArea1.wallArea.toFixed(2)} readOnly />
          <span>m</span>
        </StepContainerItemInput>

        <StepActionContainer>
          {wallArea1.wallArea ? (
            <PaintCalculatorNavLinkButton to={'/paint-calculator/step2'}>
              Próximo
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
