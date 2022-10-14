import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  NumberSquareFour,
  NumberSquareOne,
  NumberSquareThree,
  NumberSquareTwo,
} from 'phosphor-react'

import { Icon, MainContent, Point, SidebarItemContainer } from './styles'

type SidebarItemOptionType = {
  icon: ReactNode
  path: string
  variant: 1 | 2 | 3 | 4
}

const sidebarItemOptions: SidebarItemOptionType[] = [
  {
    icon: <NumberSquareOne size={32} />,
    path: 'step1',
    variant: 1,
  },
  {
    icon: <NumberSquareTwo size={32} />,
    path: 'step2',
    variant: 2,
  },
  {
    icon: <NumberSquareThree size={32} />,
    path: 'step3',
    variant: 3,
  },
  {
    icon: <NumberSquareFour size={32} />,
    path: 'step4',
    variant: 4,
  },
]

export function SidebarItem() {
  return (
    <SidebarItemContainer>
      {sidebarItemOptions.map(({ icon, path, variant }, index) => (
        <MainContent key={index}>
          <NavLink to={path}>
            <Icon variant={variant}>{icon}</Icon>
          </NavLink>

          <NavLink to={path}>
            <Point variant={variant} />
          </NavLink>
        </MainContent>
      ))}
    </SidebarItemContainer>
  )
}
