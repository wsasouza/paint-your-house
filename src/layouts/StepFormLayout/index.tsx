import { Outlet } from 'react-router-dom'
import { SidebarItem } from '../../components/SidebarItem'
import { Sidebar, StepFormLayoutContainer, Steps } from './styles'

export type ContextType = {
  handleStopForm: () => void
}

export function StepFormLayout({ handleStopForm }: ContextType) {
  return (
    <StepFormLayoutContainer>
      <Steps>
        <Sidebar>
          <SidebarItem />
        </Sidebar>

        <Outlet context={{ handleStopForm }} />
      </Steps>
    </StepFormLayoutContainer>
  )
}
