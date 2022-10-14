import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10rem auto 0 auto;
  max-width: 72rem;
  padding: 6rem 3rem;
  background: linear-gradient(180deg, #fbfbfb 0%, #d9d9d9 100%);
  border-radius: 6px;
  gap: 2rem;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    gap: 3rem;
    margin-bottom: 2rem;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 1rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 3rem;
    color: ${(props) => props.theme.colors['gray-900']};
    letter-spacing: 2px;
    line-height: 1.1;

    &::before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 2rem;
      margin-right: 8px;
      border-radius: 4px;
      background: ${(props) => props.theme.colors['orange-500']};
    }

    &::after {
      content: '.';
      color: ${(props) => props.theme.colors['orange-500']};
    }
  }

  a {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: linear-gradient(180deg, #ff8c3b 0%, #e4660d 100%);

    span {
      font-family: ${(props) => props.theme.fonts.title};
      color: ${(props) => props.theme.colors['gray-900']};
      font-size: 1.25rem;
    }

    svg {
      color: ${(props) => props.theme.colors['gray-900']};
    }

    &:hover {
      background: linear-gradient(180deg, #e4660d 0%, #ff8c3b 100%);

      svg {
        animation: icon 0.7s;
      }
    }
  }

  @media (max-width: 940px) {
    h1 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;

      &::before {
        height: 1.5rem;
      }
    }
  }
`
