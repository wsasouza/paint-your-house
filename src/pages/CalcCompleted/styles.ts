import styled from 'styled-components'

export const CalcCompletedContainer = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  margin: 10rem auto 3rem auto;
  max-width: 72rem;
  width: 100%;
  padding: 2rem 3rem;
  background: linear-gradient(180deg, #fbfbfb 0%, #d9d9d9 100%);
  border-radius: 6px;
  gap: 2rem;
  font-size: ${(props) => props.theme.fontSizes['text-s']};
`
