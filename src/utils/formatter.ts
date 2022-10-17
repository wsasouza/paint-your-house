export const quantityDisplay = (quantityPaint: number) => {
  if (quantityPaint === 0) return 'Nenhuma tinta foi necessária'
  else if (quantityPaint === 1) {
    return `${`${quantityPaint}`.padStart(2, '0')} unidade  de `
  } else return `${`${quantityPaint}`.padStart(2, '0')} unidades de `
}
