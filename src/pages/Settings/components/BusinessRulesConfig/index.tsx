import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import {
  BusinessRulesContext,
  UpdateBusinessRules,
} from '../../../../contexts/BusinessRulesContexts'

import { ActionButton, SettingsDisplay, DefaultValues } from '../../styles'
import { BusinessRulesConfigContainer } from './styles'
import { defaultValues } from '../../../../utils/initialValue'

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
  const rules = useContextSelector(BusinessRulesContext, (context) => {
    return context.businessRules
  })

  const updateRules = useContextSelector(BusinessRulesContext, (context) => {
    return context.updateBusinessRules
  })

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(businessRulesFormSchema),
    defaultValues: rules,
  })

  function handleUpdateBusinessRules(data: UpdateBusinessRules) {
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

    updateRules({
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
      <SettingsDisplay>Configurações gerais</SettingsDisplay>
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
        <ActionButton type="submit">Atualizar Valores</ActionButton>
      </form>
      <DefaultValues>
        <h2>Valores Padrão</h2>

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
          onClick={() => handleUpdateBusinessRules(defaultValues)}
        >
          Retomar valores padrão
        </ActionButton>
      </DefaultValues>
    </BusinessRulesConfigContainer>
  )
}
