import { Paint } from '../contexts/BusinessRulesContexts'

export function paintRequiredCalc(quantity: number, paintSizes: Paint[]) {
  let restQuantity = quantity
  const paintCalc = paintSizes

  // reset counts
  paintCalc[0].count = 0
  paintCalc[1].count = 0
  paintCalc[2].count = 0
  paintCalc[3].count = 0

  while (restQuantity > 0) {
    if (restQuantity >= paintCalc[0].size) {
      restQuantity -= paintCalc[0].size
      paintCalc[0].count += 1
    }

    if (restQuantity >= paintCalc[1].size && restQuantity < paintCalc[0].size) {
      restQuantity -= paintCalc[1].size
      paintCalc[1].count += 1
    }

    if (restQuantity >= paintCalc[2].size && restQuantity < paintCalc[1].size) {
      restQuantity -= paintCalc[2].size
      paintCalc[2].count += 1
    }

    if (restQuantity >= 0 && restQuantity < paintCalc[2].size) {
      restQuantity -= paintCalc[3].size
      paintCalc[3].count += 1
    }
  }

  const requiredPaint = paintCalc.filter((item) => {
    if (item.count > 0) return item
    else return ''
  })

  return requiredPaint
}
