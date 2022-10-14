import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header<{ scroll: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: 0.5s;
  padding: 1rem 1rem;
  background: linear-gradient(90deg, #fbfbfb 0%, #d9d9d9 100%);

  ${(props) => props.scroll && scrollStyle};

  nav {
    display: flex;
    align-items: center;
    display: flex;
    max-width: 80rem;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }

  a:last-child {
    color: ${(props) => props.theme.colors['gray-900']};
    background: ${(props) => props.theme.colors['gray-200']};
    border: 1px solid ${(props) => props.theme.colors['gray-900']};
    padding: 0.25rem 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      font-family: ${(props) => props.theme.fonts.title};
    }

    &:hover {
      color: ${(props) => props.theme.colors['gray-900']};
      background: linear-gradient(180deg, #e4660d 0%, #ff8c3b 100%);
      font-weight: bold;
      transition: background 0.3s;

      svg {
        color: ${(props) => props.theme.colors['gray-900']};
        animation: icon 0.7s;
      }
    }

    &.active {
      box-shadow: 0 0 16px 4px rgba(228, 102, 13, 0.6);
      border: ${(props) => props.theme.colors['orange-500']};

      span {
        font-weight: bold;
      }

      svg {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 420px) {
    a:last-child {
      padding: 0.5rem 1rem;

      span {
        display: none;
      }
    }
  }
`

const scrollStyle = css`
  padding: 0.25rem 1rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`
