import styled, { css } from 'styled-components'

export const SidebarItemContainer = styled.div`
  margin: 1.5rem 0;
  position: relative;
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

interface IconProps {
  variant: 1 | 2 | 3 | 4
}

export const Icon = styled.div<IconProps>`
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

  ${(props) =>
    props.variant === 1 &&
    css`
      border-top: 5px solid ${(props) => props.theme.colors['gray-100']};
    `};
`

interface PointProps extends IconProps {}

export const Point = styled.div<PointProps>`
  width: 0.375rem;
  height: 0.375rem;
  padding: 0.375rem;
  border: 3px solid ${(props) => props.theme.colors['gray-300']};
  border-radius: 50%;
  margin-left: 1rem;
  margin-top: -0.5rem;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  background-color: ${(props) => props.theme.colors['gray-100']};
`
