import styled from 'styled-components'

export const NameInput = styled.div`
  margin-top: 0.875rem;
  display: flex;
  align-items: center;

  label {
    width: 6rem;
    ${(props) => props.theme.fontSizes['text-m']};
  }

  input {
    background: ${(props) => props.theme.colors['gray-100']};
    border: 0;
    padding: 0.5rem;
    width: 12rem;
    height: 2rem;
    border-radius: 6px;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['orange-500']};
    }
  }
`
