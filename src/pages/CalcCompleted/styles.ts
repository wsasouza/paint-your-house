import styled, { css } from 'styled-components'

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

export const ResultTitle = styled.h1`
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

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

interface ConvenientProps {
  variant?: string
}

export const Convenient = styled.div<ConvenientProps>`
  label {
    font-weight: bold;
  }

  span {
    margin-left: 0.5rem;
  }

  ${(props) =>
    props.variant &&
    css`
      span {
        border-bottom: 2px solid ${(props) => props.theme.colors['orange-500']};
      }
    `};
`

export const Paints = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`

export const Paint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1px;
    background: ${(props) => props.theme.colors['orange-500']};
  }
`

export const RestartButton = styled.button`
  font-size: ${(props) => props.theme.fontSizes['text-s']};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 15rem;
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
