import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PaintBucket } from 'phosphor-react'
import * as yup from 'yup'

import { usePaintRules } from '../../../../hooks/usePaintRules'
import { PaintCoverType } from '../../../../contexts/BusinessRulesContexts'
import { paintCoverDefaultValue } from '../../../../utils/initialValue'

import {
  ActionButton,
  DefaultValues,
  SettingsSubtitle,
  SettingsTitle,
} from '../../styles'
import {
  PaintCanSizesContainer,
  PaintCoverRulesForm,
  PaintRulesConfigContainer,
  PaintSize,
  PaintSizeContainer,
} from './styles'

const paintRulesFormSchema = yup.object({
  paintCover: yup.number(),
})

export function PaintRulesConfig() {
  const { paintCoverRule, paintCanSizesRules, updatePaintCoverRule } =
    usePaintRules()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(paintRulesFormSchema),
    defaultValues: paintCoverRule,
  })

  function handleUpdatePaintCoverRule(data: Omit<PaintCoverType, 'updatedAt'>) {
    const { paintCover } = data

    updatePaintCoverRule({ paintCover })
  }

  return (
    <PaintRulesConfigContainer>
      <SettingsTitle>Configuração de tintas</SettingsTitle>
      <PaintCoverRulesForm onSubmit={handleSubmit(handleUpdatePaintCoverRule)}>
        <SettingsSubtitle>Cobertura da tinta</SettingsSubtitle>
        <label htmlFor="">Cada litro de tinta é capaz de pintar:</label>
        <input
          type="number"
          min="1"
          max="30"
          step="1"
          {...register('paintCover')}
          required
        />
        <span>
          m<sup>2</sup>
        </span>

        <ActionButton onClick={() => handleSubmit(handleUpdatePaintCoverRule)}>
          Atualizar Valor
        </ActionButton>
      </PaintCoverRulesForm>
      <DefaultValues>
        <SettingsSubtitle>Valor Padrão</SettingsSubtitle>
        <p>
          Cada litro de tinta é capaz de pintar:{' '}
          <span>
            5m<sup>2</sup>
          </span>
        </p>
        <ActionButton
          onClick={() => handleUpdatePaintCoverRule(paintCoverDefaultValue)}
        >
          Retomar valor padrão
        </ActionButton>
      </DefaultValues>

      <PaintCanSizesContainer>
        <SettingsSubtitle>
          Tamanhos das lata de tinta em litros
        </SettingsSubtitle>

        <PaintSizeContainer>
          {paintCanSizesRules.paintCanSizes.map((paint) => {
            return (
              <PaintSize key={paint.id}>
                <PaintBucket size={22} weight="duotone" />
                {paint.size.toString().replace('.', ',')} <span>litros</span>
              </PaintSize>
            )
          })}
        </PaintSizeContainer>
      </PaintCanSizesContainer>
    </PaintRulesConfigContainer>
  )
}
