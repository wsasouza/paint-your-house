import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'
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
  const [animationParent] = useAutoAnimate()
  const { formStep1, formStep2, formStep3, formStep4 } =
    usePaintCalcFormControls()

  return (
    <StepFormLayoutContainer
      ref={animationParent as React.RefObject<HTMLDivElement>}
    >
      <Sidebar>
        <SidebarItem end to={'step1'}>
          <Icon active={formStep1}>
            <NumberSquareOne size={32} />
          </Icon>
          <Point active={formStep1} />
        </SidebarItem>

        <SidebarItem to={formStep1 ? 'step2' : '#'}>
          <Icon active={formStep2}>
            <NumberSquareTwo size={32} />
          </Icon>
          <Point active={formStep2} />
        </SidebarItem>

        <SidebarItem to={formStep2 ? 'step3' : '#'}>
          <Icon active={formStep3}>
            <NumberSquareThree size={32} />
          </Icon>
          <Point active={formStep3} />
        </SidebarItem>

        <SidebarItem to={formStep3 ? 'step4' : '#'}>
          <Icon active={formStep4}>
            <NumberSquareFour size={32} />
          </Icon>
          <Point active={formStep4} />
        </SidebarItem>
      </Sidebar>

      <Outlet />
    </StepFormLayoutContainer>
  )
}
