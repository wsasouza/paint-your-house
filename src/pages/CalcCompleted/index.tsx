import { useNavigate } from 'react-router-dom'
import { PaintBucket, Repeat } from 'phosphor-react'

import { usePaintCalcAreas } from '../../hooks/usePaintCalcAreas'
import { usePaintCalcFormControls } from '../../hooks/usePaintCalcFormControls'
import { usePaintRules } from '../../hooks/usePaintRules'
import { quantityDisplay } from '../../utils/formatter'
import { paintRequiredCalc } from '../../utils/paintCalculation'
import {
  CalcCompletedContainer,
  Convenient,
  InfoContainer,
  Paint,
  Paints,
  RestartButton,
  ResultContainer,
  ResultTitle,
} from './styles'

export function CalcCompleted() {
  const { areaTotal, name } = usePaintCalcAreas()
  const { paintCanSizesRules, paintCoverRule } = usePaintRules()
  const { formCancel } = usePaintCalcFormControls()
  const navigate = useNavigate()

  const litersPaint = areaTotal / paintCoverRule.paintCover

  const paintSizes = paintCanSizesRules

  const requiredPaint = paintRequiredCalc(litersPaint, paintSizes)

  function handleFormRestart() {
    formCancel()
    navigate('/')
  }

  return (
    <CalcCompletedContainer>
      <ResultTitle>Tintas necessárias</ResultTitle>
      <ResultContainer>
        <InfoContainer>
          <Convenient>
            <label>Quantidade: </label>
            <span>{litersPaint.toFixed(2).replace('.', ',') + ' litros.'}</span>
          </Convenient>
          <Convenient>
            <label>Rendimento: </label>
            <span>
              {paintCoverRule.paintCover}m<sup>2</sup> por litro.
            </span>
          </Convenient>
          <Convenient variant="last-item">
            <label>Cômodo: </label>
            <span>{name}</span>
          </Convenient>
        </InfoContainer>
        <Paints>
          {requiredPaint.map((paint) => {
            return (
              <Paint key={paint.id}>
                <span>{quantityDisplay(paint.count)}</span>
                <PaintBucket size={22} weight="duotone" />
                <span>{paint.size.toString().replace('.', ',')}</span>
                <span>litros</span>
              </Paint>
            )
          })}
        </Paints>
        <RestartButton onClick={handleFormRestart}>
          <Repeat size={22} />
          Novo Cálculo
        </RestartButton>
      </ResultContainer>
    </CalcCompletedContainer>
  )
}
