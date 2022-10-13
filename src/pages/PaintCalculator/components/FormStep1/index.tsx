import { useOutletContext } from 'react-router-dom'

import { ContextType } from '../../../../layouts/StepFormLayout'

import {
  StepContainer,
  StepContainerItemInput,
  StepContainerTitle,
} from '../../styles'
import { NameInput } from './styles'

interface FormStep1Inputs {
  name: string
  wall1: number
}

export function FormStep1(data: FormStep1Inputs) {
  const { handleStopForm } = useOutletContext<ContextType>()

  return (
    <StepContainer>
      <StepContainerTitle>Parede 1/4</StepContainerTitle>
      <NameInput>
        <label htmlFor="">Cômodo:</label>
        <input type="text" placeholder="Digite o nome do cômodo" />
      </NameInput>
      <StepContainerItemInput>
        <label htmlFor="">Altura:</label>
        <input type="number" min="1" max="10" step="0.01" placeholder="0,00" />
        <span>m</span>
      </StepContainerItemInput>
      <StepContainerItemInput>
        <label htmlFor="">Comprimento:</label>
        <input type="number" min="1" max="50" step="0.01" placeholder="0,00" />
        <span>m</span>
      </StepContainerItemInput>
      <StepContainerItemInput>
        <label htmlFor="">Portas:</label>
        <input type="number" min="0" max="10" step="1" placeholder="0" />
        <span>un</span>
      </StepContainerItemInput>
      <StepContainerItemInput>
        <label htmlFor="">Janelas:</label>
        <input type="number" min="0" max="10" step="1" placeholder="0" />
        <span>un</span>
      </StepContainerItemInput>
      <button onClick={handleStopForm}>Cancelar</button>
    </StepContainer>
  )
}
