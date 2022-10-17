import { usePaintCalcAreas } from '../../hooks/usePaintCalcAreas'
import { usePaintRules } from '../../hooks/usePaintRules'
import { paintRequiredCalc } from '../../utils/paintCalculation'
import { CalcCompletedContainer } from './styles'

export function CalcCompleted() {
  const { areaTotal } = usePaintCalcAreas()
  const { paintCanSizesRules, paintCoverRule } = usePaintRules()

  const litersPaint = areaTotal / paintCoverRule.paintCover

  const paintSizes = paintCanSizesRules

  const requiredPaint = paintRequiredCalc(litersPaint, paintSizes)

  console.log(requiredPaint)

  return (
    <CalcCompletedContainer>
      <h1>Calculo Total</h1>
    </CalcCompletedContainer>
  )
}
