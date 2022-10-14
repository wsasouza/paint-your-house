import { XSquare } from 'phosphor-react'
import { useOutletContext } from 'react-router-dom'
import { ContextType } from '../../../../layouts/StepFormLayout'
import {
  StepContainer,
  StepContainerHeader,
  StepContainerItemInput,
  StepContainerTitle,
  StopFormButton,
} from '../../styles'

interface FormStep3Inputs {
  wall3: number
}

export function FormStep3() {
  const { handleStopForm } = useOutletContext<ContextType>()

  return (
    <StepContainer>
      <StepContainerHeader>
        <StepContainerTitle>Parede 3/4</StepContainerTitle>
        <StopFormButton title="Cancelar" onClick={handleStopForm}>
          <XSquare size={22} weight="regular" />
        </StopFormButton>
      </StepContainerHeader>

      <StepContainerItemInput>
        <label htmlFor="">Altura:</label>
        <input
          autoFocus
          type="number"
          min="1"
          max="10"
          step="0.01"
          placeholder="0,00"
        />
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
    </StepContainer>
  )
}
