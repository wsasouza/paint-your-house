import styled from 'styled-components'

export const SettingsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10rem auto 0 auto;
  max-width: 72rem;
  width: 100%;
  padding: 2rem 3rem;
  background: linear-gradient(180deg, #fbfbfb 0%, #d9d9d9 100%);
  border-radius: 6px;
  gap: 2rem;
  font-size: 0.875rem;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    gap: 3rem;
    margin-bottom: 2rem;
  }
`

export const SettingsDisplay = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.25rem;
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

export const DefaultValues = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.125rem;
  }

  p {
    line-height: 2;
  }

  span {
    font-size: 0.875rem;
    font-weight: bold;
  }
`

export const ActionButton = styled.button`
  margin-top: 1rem;
  display: block;
  width: 70%;
  border-radius: 6px;
  padding: 0.25rem;
  cursor: pointer;
  background: linear-gradient(180deg, #ff8c3b 0%, #e4660d 100%);

  &:hover {
    background: linear-gradient(180deg, #e4660d 0%, #ff8c3b 100%);
  }
`
