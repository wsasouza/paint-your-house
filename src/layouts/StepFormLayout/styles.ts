import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

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

export const SidebarItem = styled(NavLink)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:first-child:hover {
    div:first-child {
      background: ${(props) => props.theme.colors['orange-500']};
    }
  }
`

interface IconProps {
  active: boolean
}

export const Icon = styled.div<IconProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-300']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors['gray-100']};
  }

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme.colors['orange-500']};

      &:hover {
        svg {
          background: ${(props) => props.theme.colors['orange-500']};
          animation: icon 0.7s;
        }
      }
    `}
`

interface PointProps extends IconProps {}

export const Point = styled.div<PointProps>`
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

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme.colors['orange-500']};
      opacity: 0.8;

      &:hover {
        background: ${(props) => props.theme.colors['orange-500']};
      }
    `}
`
