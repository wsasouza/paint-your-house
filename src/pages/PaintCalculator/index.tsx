import { StepFormLayout } from '../../layouts/StepFormLayout'
import { PaintCalculatorContainer, PaintCalculatorTitle } from './styles'

export function PaintCalculator() {
  return (
    <PaintCalculatorContainer>
      <PaintCalculatorTitle>Cálculo de tinta</PaintCalculatorTitle>
      <StepFormLayout />
    </PaintCalculatorContainer>
  )
}
