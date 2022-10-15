import { Outlet } from 'react-router-dom'
import {
  NumberSquareFour,
  NumberSquareOne,
  NumberSquareThree,
  NumberSquareTwo,
} from 'phosphor-react'

import { usePaintCalcFormControls } from '../../hooks/usePaintCalcFormControls'

import {
  Icon,
  Point,
  Sidebar,
  SidebarItem,
  StepFormLayoutContainer,
} from './styles'

export function StepFormLayout() {
  const { formStep1, formStep2, formStep3, formStep4 } =
    usePaintCalcFormControls()

  return (
    <StepFormLayoutContainer>
      <Sidebar>
        <SidebarItem end to={'step1'} variant={formStep1}>
          <Icon>
            <NumberSquareOne size={32} />
          </Icon>
          <Point />
        </SidebarItem>

        <SidebarItem to={formStep1 ? 'step2' : '#'} variant={formStep2}>
          <Icon>
            <NumberSquareTwo size={32} />
          </Icon>
          <Point />
        </SidebarItem>

        <SidebarItem to={formStep2 ? 'step3' : '#'} variant={formStep3}>
          <Icon>
            <NumberSquareThree size={32} />
          </Icon>
          <Point />
        </SidebarItem>

        <SidebarItem to={formStep3 ? 'step4' : '#'} variant={formStep4}>
          <Icon>
            <NumberSquareFour size={32} />
          </Icon>
          <Point />
        </SidebarItem>
      </Sidebar>

      <Outlet />
    </StepFormLayoutContainer>
  )
}
