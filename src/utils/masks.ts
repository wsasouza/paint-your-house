export const maskValue = (value: string | undefined) => {
  if (!value) return ''

  return (Number(value.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', {
    style: 'decimal',
  })
}

export const unMaskValue = (value: string) => {
  return typeof value === 'number'
    ? value
    : Number(value.replace(/\D/g, '')) / 100
}
