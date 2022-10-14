import { Outlet } from 'react-router-dom'
import { SidebarItem } from '../../components/SidebarItem'
import { Sidebar, StepFormLayoutContainer, Steps } from './styles'

export function StepFormLayout() {
  return (
    <StepFormLayoutContainer>
      <Steps>
        <Sidebar>
          <SidebarItem />
        </Sidebar>

        <Outlet />
      </Steps>
    </StepFormLayoutContainer>
  )
}
