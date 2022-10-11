import styled from 'styled-components'

export const BusinessRulesConfigContainer = styled.div`
  ul {
    margin-top: 1.5rem;

    li {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;

      label {
        width: 18rem;
      }

      input {
        background: ${(props) => props.theme.colors['gray-100']};
        text-align: right;
        border: 0;
        padding: 0.25rem;
        width: 3.8rem;
        height: 1.5rem;
        border-radius: 6px;

        &:focus {
          outline: 0;
          box-shadow: 0 0 0 2px ${(props) => props.theme.colors['orange-500']};
        }
      }

      span {
        width: 1rem;
        margin-left: 0.25rem;
      }
    }
  }
`
