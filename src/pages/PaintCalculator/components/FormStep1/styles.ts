import styled from 'styled-components'

export const Something = styled.div`
  margin-top: 10rem;
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};
`
