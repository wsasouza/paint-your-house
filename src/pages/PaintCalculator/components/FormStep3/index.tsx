import {
  StepContainer,
  StepContainerItemInput,
  StepContainerTitle,
} from '../../styles'

interface FormStep3Inputs {
  wall3: number
}

export function FormStep3(data: FormStep3Inputs) {
  return (
    <StepContainer>
      <StepContainerTitle>Parede 3/4</StepContainerTitle>

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
    </StepContainer>
  )
}
