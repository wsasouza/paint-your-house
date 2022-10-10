import { PaintBucket } from 'phosphor-react'
import { Link } from 'react-router-dom'
import illustration from '../../assets/illustration.svg'
import { HomeContainer, Text } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Text>
        <h1>
          Calcule a quantidade de tinta e dê uma nova vida para a sua casa
        </h1>
        <Link to="/paint-calculator" title="Calcular">
          <PaintBucket size={22} weight="duotone" />
          <span>Calcular</span>
        </Link>
      </Text>
      <img src={illustration} alt="" />
    </HomeContainer>
  )
}
