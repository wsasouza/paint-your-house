import styled from 'styled-components'

export const PaintCalculatorContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr, 3fr;
  margin: 10rem auto 3rem auto;
  max-width: 72rem;
  width: 100%;
  padding: 2rem 3rem;
  background: linear-gradient(180deg, #fbfbfb 0%, #d9d9d9 100%);
  border-radius: 6px;
  gap: 2rem;
  font-size: 0.875rem;
`

export const StepContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};
  width: 100%;
`

export const PaintCalculatorTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.5rem;
  font-weight: bold;

  &::before {
    content: '';
    display: inline-block;
    width: 0.25rem;
    height: 1.25rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors['orange-500']};
  }

  &::after {
    content: ':';
    color: ${(props) => props.theme.colors['orange-500']};
  }
`

export const PaintCalculatorSubtitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.125rem;
`
