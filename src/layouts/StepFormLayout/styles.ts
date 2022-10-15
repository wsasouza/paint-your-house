import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StepFormLayoutContainer = styled.div`
  display: flex;
  flex: 1;
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colors['gray-300']};
  padding-left: 1rem;
  padding-right: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};
`

interface SidebarItemProps {
  variant: 0 | 1 | 2 | 3 | 4
}

export const SidebarItem = styled(NavLink)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &.active {
    div:last-child {
      background-color: ${(props) => props.theme.colors['orange-500']};
      border: 3px solid ${(props) => props.theme.colors['gray-800']};
    }
  }
`

export const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['gray-300']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors['gray-100']};
  }
`

export const Point = styled.div`
  width: 0.375rem;
  height: 0.375rem;
  padding: 0.375rem;
  border: 3px solid ${(props) => props.theme.colors['gray-300']};
  border-radius: 50%;
  margin-left: 3.5rem;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  background: ${(props) => props.theme.colors['gray-100']};
`
