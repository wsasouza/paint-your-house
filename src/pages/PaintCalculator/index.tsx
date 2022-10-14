import { Play } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StepFormLayout } from '../../layouts/StepFormLayout'
import {
  PaintCalculatorActionButton,
  PaintCalculatorContainer,
  PaintCalculatorInfoForm,
  PaintCalculatorSubtitle,
  PaintCalculatorTitle,
} from './styles'

export function PaintCalculator() {
  const [startForm, setStartForm] = useState(false)
  const [wallArea1, setWallArea1] = useState(0)
  const [wallArea2, setWallArea2] = useState(0)
  const [wallArea3, setWallArea3] = useState(0)
  const [wallArea4, setWallArea4] = useState(0)

  function handleStartForm() {
    navigate('step1')
    setStartForm(true)
  }

  function handleStopForm() {
    navigate('/paint-calculator')
    setStartForm(false)
  }

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
          <PaintCalculatorActionButton onClick={handleStartForm}>
            <Play size={16} weight="duotone" />
            Começar
          </PaintCalculatorActionButton>
        </PaintCalculatorInfoForm>
      ) : (
        <StepFormLayout handleStopForm={handleStopForm} />
      )}
    </PaintCalculatorContainer>
  )
}
