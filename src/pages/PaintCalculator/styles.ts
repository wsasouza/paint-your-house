import styled from 'styled-components'

export const PaintCalculatorContainer = styled.main`
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

export const PaintCalculatorInfoForm = styled.div`
  h3 {
    margin-top: 0.5rem;
    margin-left: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors['orange-500']};
    width: 4.3rem;
  }

  ul {
    li {
      margin-top: 0.4rem;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;

      &::before {
        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 1px;
        background: ${(props) => props.theme.colors['orange-500']};
      }
    }

    li:first-child {
      margin-top: 0.75rem;
    }

    li:last-child {
      margin-bottom: 1rem;
    }
  }
`

export const StepContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};
  max-width: 30rem;
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
`

export const StepContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StepContainerTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes['title-m']};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1px;
    background: ${(props) => props.theme.colors['orange-500']};
  }
`
export const StopFormButton = styled.button`
  cursor: pointer;

  &:hover {
    svg {
      animation: icon 0.7s;
    }
  }
`

export const StepContainerItemInput = styled.div`
  margin-top: 0.875rem;
  display: flex;
  align-items: center;

  label {
    width: 6rem;
    ${(props) => props.theme.fontSizes['text-m']};
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
`

export const PaintCalculatorActionButton = styled.button`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  background: linear-gradient(180deg, #ff8c3b 0%, #e4660d 100%);

  &:hover {
    background: linear-gradient(180deg, #e4660d 0%, #ff8c3b 100%);

    svg {
      color: ${(props) => props.theme.colors['gray-900']};
      animation: icon 0.7s;
    }
  }
`
