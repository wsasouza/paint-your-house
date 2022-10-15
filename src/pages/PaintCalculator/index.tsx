import { Play } from 'phosphor-react'

import { usePaintCalcFormControls } from '../../hooks/usePaintCalcFormControls'

import { StepFormLayout } from '../../layouts/StepFormLayout'
import {
  PaintCalculatorActionButton,
  PaintCalculatorContainer,
  PaintCalculatorInfoForm,
  PaintCalculatorSubtitle,
  PaintCalculatorTitle,
} from './styles'

export function PaintCalculator() {
  const { startForm, formInit } = usePaintCalcFormControls()

  return (
    <PaintCalculatorContainer>
      <PaintCalculatorTitle>Cálculo de tinta</PaintCalculatorTitle>
      {!startForm ? (
        <PaintCalculatorInfoForm>
          <PaintCalculatorSubtitle>Instruções:</PaintCalculatorSubtitle>
          <h3>Informar</h3>
          <ul>
            <li>Nome do cômodo a ser pintado.</li>
            <li>Altura de cada parede em metros.</li>
            <li>Comprimento de cada parede em metros.</li>
            <li>Quantidade de portas na parede.</li>
            <li>Quantidade de janelas na parede.</li>
          </ul>
          <PaintCalculatorActionButton onClick={formInit}>
            <Play size={16} weight="duotone" />
            Começar
          </PaintCalculatorActionButton>
        </PaintCalculatorInfoForm>
      ) : (
        <StepFormLayout />
      )}
    </PaintCalculatorContainer>
  )
}
