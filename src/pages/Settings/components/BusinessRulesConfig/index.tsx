import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { businessRulesDefaultValues } from '../../../../utils/initialValue'
import { BusinessRulesType } from '../../../../contexts/BusinessRulesContexts'

import {
  ActionButton,
  DefaultValues,
  SettingsSubtitle,
  SettingsTitle,
} from '../../styles'
import { BusinessRulesConfigContainer } from './styles'
import { useBusinessRules } from '../../../../hooks/useBusinessRules'

const businessRulesFormSchema = yup.object({
  minWall: yup.number(),
  maxWall: yup.number(),
  maxDoorAndWindowsPercent: yup.number(),
  heightOfTheWallAboveTheDoor: yup.number(),
  widthDoor: yup.number(),
  heightDoor: yup.number(),
  widthWindow: yup.number(),
  heightWindow: yup.number(),
})

export function BusinessRulesConfig() {
  const navigate = useNavigate()

  const { businessRules, updateBusinessRules } = useBusinessRules()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(businessRulesFormSchema),
    defaultValues: businessRules,
  })

  function handleUpdateBusinessRules(
    data: Omit<BusinessRulesType, 'updatedAt'>,
  ) {
    const {
      minWall,
      maxWall,
      maxDoorAndWindowsPercent,
      heightOfTheWallAboveTheDoor,
      widthDoor,
      heightDoor,
      widthWindow,
      heightWindow,
    } = data

    updateBusinessRules({
      minWall,
      maxWall,
      maxDoorAndWindowsPercent,
      heightOfTheWallAboveTheDoor,
      widthDoor,
      heightDoor,
      widthWindow,
      heightWindow,
    })

    navigate('/paint-calculator')
  }

  return (
    <BusinessRulesConfigContainer>
      <SettingsTitle>Configurações gerais</SettingsTitle>
      <form onSubmit={handleSubmit(handleUpdateBusinessRules)}>
        <ul>
          <li>
            <label htmlFor="">Área mínima da parede:</label>
            <input
              type="number"
              min="1"
              max="5"
              step="1"
              {...register('minWall')}
              required
            />
            <span>
              m<sup>2</sup>
            </span>
          </li>
          <li>
            <label htmlFor="">Área máxima da parede:</label>
            <input
              type="number"
              min="6"
              max="99"
              step="1"
              {...register('maxWall')}
              required
            />
            <span>
              m<sup>2</sup>
            </span>
          </li>
          <li>
            <label htmlFor="">
              Percentual de portas e janelas x parede livre:
            </label>
            <input
              type="number"
              min="10"
              max="100"
              step="10"
              {...register('maxDoorAndWindowsPercent')}
              required
            />
            <span>%</span>
          </li>
          <li>
            <label htmlFor="">Altura da parede acima da porta:</label>
            <input
              type="number"
              min="0.2"
              max="5"
              step="0.1"
              {...register('heightOfTheWallAboveTheDoor')}
              required
            />
            <span>m</span>
          </li>
          <li>
            <label htmlFor="">Comprimento da porta:</label>
            <input
              type="number"
              min="0.7"
              max="2.5"
              step="0.1"
              {...register('widthDoor')}
              required
            />
            <span>m</span>
          </li>
          <li>
            <label htmlFor="">Altura da porta:</label>
            <input
              type="number"
              min="1.8"
              max="2.4"
              step="0.1"
              {...register('heightDoor')}
              required
            />
            <span>m</span>
          </li>
          <li>
            <label htmlFor="">Comprimento da janela:</label>
            <input
              type="number"
              min="0.5"
              max="3"
              step="0.1"
              {...register('widthWindow')}
              required
            />
            <span>m</span>
          </li>
          <li>
            <label htmlFor="">Altura da janela:</label>
            <input
              type="number"
              min="0.5"
              max="1.8"
              step="0.1"
              {...register('heightWindow')}
              required
            />
            <span>m</span>
          </li>
        </ul>
        <ActionButton onClick={() => handleSubmit(handleUpdateBusinessRules)}>
          Atualizar Valores
        </ActionButton>
      </form>
      <DefaultValues>
        <SettingsSubtitle>Valores Padrão</SettingsSubtitle>

        <p>
          Área mínima da parede:{' '}
          <span>
            1m<sup>2</sup>
          </span>
        </p>

        <p>
          Área máxima da parede:{' '}
          <span>
            50m<sup>2</sup>
          </span>
        </p>

        <p>
          Percentual de portas e janelas x parede livre: <span>50%</span>
        </p>

        <p>
          Altura da parede acima da porta: <span>0,3m</span>
        </p>

        <p>
          Dimensões da porta: <span>0,8m x 1,9m</span>
        </p>

        <p>
          Dimensões da janela: <span>2m x 1,2m</span>
        </p>
        <ActionButton
          type="button"
          onClick={() => handleUpdateBusinessRules(businessRulesDefaultValues)}
        >
          Retomar valores padrão
        </ActionButton>
      </DefaultValues>
    </BusinessRulesConfigContainer>
  )
}
