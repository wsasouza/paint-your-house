import styled from 'styled-components'

export const PaintRulesConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaintCoverRulesForm = styled.form`
  margin-top: 1rem;

  label {
    display: inline-block;
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
    margin-right: 0.25rem;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['orange-500']};
    }
  }
`

export const PaintCanSizesContainer = styled.div`
  margin-top: 7rem;

  @media (max-width: 940px) {
    margin-top: 3rem;
  }
`

export const PaintSizeContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`

export const PaintSize = styled.p`
  line-height: 2;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  font-weight: bold;
`
