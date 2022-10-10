import { Sliders } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

interface HeaderProps {
  scroll: boolean
}

export function Header({ scroll }: HeaderProps) {
  return (
    <HeaderContainer scroll={scroll}>
      <nav>
        <NavLink end to="/" title="Home">
          <img src={logo} alt="" width={200} />
        </NavLink>
        <NavLink to="/settings" title="Configurações">
          <Sliders size={22} weight="regular" />
          <span>Configurações</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
