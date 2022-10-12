import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  NumberSquareFour,
  NumberSquareOne,
  NumberSquareThree,
  NumberSquareTwo,
} from 'phosphor-react'

import { useForm } from '../../hooks/useForm'

import { Icon, MainContent, Point, SidebarItemContainer } from './styles'

type SidebarItemOptionType = {
  icon: ReactNode
  path: string
}

const sidebarItemOptions: SidebarItemOptionType[] = [
  {
    icon: <NumberSquareOne size={32} />,
    path: 'step1',
  },
  {
    icon: <NumberSquareTwo size={32} />,
    path: 'step2',
  },
  {
    icon: <NumberSquareThree size={32} />,
    path: 'step3',
  },
  {
    icon: <NumberSquareFour size={32} />,
    path: 'step4',
  },
]

export function SidebarItem() {
  const { state } = useForm()

  return (
    <SidebarItemContainer>
      {sidebarItemOptions.map(({ icon, path }, index) => (
        <MainContent key={index}>
          <NavLink to={path}>
            <Icon active={state.currentStep === index + 1}>{icon}</Icon>
          </NavLink>

          <NavLink to={path}>
            <Point active={state.currentStep === index + 1} />
          </NavLink>
        </MainContent>
      ))}
    </SidebarItemContainer>
  )
}
