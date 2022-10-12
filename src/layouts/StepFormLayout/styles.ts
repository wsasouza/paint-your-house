import styled from 'styled-components'

export const StepFormLayoutContainer = styled.div``

export const Steps = styled.div`
  flex: 1;
  display: flex;
`

export const Sidebar = styled.aside`
  border-right: 1px solid ${(props) => props.theme.colors['gray-300']};
  padding-left: 1rem;
  padding-right: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};
`
