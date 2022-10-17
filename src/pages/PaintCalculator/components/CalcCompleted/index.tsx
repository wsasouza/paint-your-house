import { usePaintCalcAreas } from '../../../../hooks/usePaintCalcAreas'
import { usePaintRules } from '../../../../hooks/usePaintRules'
import { CalcCompletedContainer } from './styles'

export function CalcCompleted() {
  const { wallArea1, wallArea2, wallArea3, wallArea4 } = usePaintCalcAreas()
  const { paintCanSizesRules, paintCoverRule } = usePaintRules()

  const wallAreas = {
    area1: wallArea1.wallArea,
    area2: wallArea2.wallArea,
    area3: wallArea3.wallArea,
    area4: wallArea4.wallArea,
  }

  const wallAreaTotal = Object.values(wallAreas).reduce(
    (acc, area) => (acc += area),
    0,
  )

  let quantity = wallAreaTotal / paintCoverRule.paintCover

  const paintSizes = paintCanSizesRules.paintCanSizes

  const paintRequired = paintSizes.reverse().map((item) => {
    while (quantity >= item.size) {
      quantity = quantity - item.size
      item.count++
    }

    return item
  })

  console.log(wallAreaTotal)
  console.log(paintSizes)
  console.log(paintRequired)

  return (
    <CalcCompletedContainer>
      <h1>Calculo Total</h1>
    </CalcCompletedContainer>
  )
}
