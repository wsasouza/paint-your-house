import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --toastify-color-light: linear-gradient(180deg, #fbfbfb 0%, #d9d9d9 100%);
    --toastify-color-dark: linear-gradient(90deg, #fbfbfb 0%, #d9d9d9 100%);
    --toastify-color-info: linear-gradient(90deg, #e4660d 0%, #ff8c3b 100%);
    --toastify-color-error: linear-gradient(90deg, #e4660d 0%, #ff8c3b 100%);
    --toastify-color-warning: linear-gradient(90deg, #e4660d 0%, #ff8c3b 100%);
    --toastify-color-success: linear-gradient(90deg, #e4660d 0%, #ff8c3b 100%);
    --toastify-icon-color-info: #e4660d;
    --toastify-icon-color-error: #AB222E;
    --toastify-icon-color-warning: #f7a407;
    --toastify-icon-color-success: #07a31c;  
  
    --toastify-text-color-light: #020202;
    --toastify-text-color-dark: #020202;
  }

*,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
}

  body {
    background-color: ${(props) => props.theme.colors['gray-200']};
    color: ${(props) => props.theme.colors['gray-700']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  body, input-security, textarea, button, h1, span {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${(props) => props.theme.fontSizes['text-m']};
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;    
  }

  ul {
    list-style: none;
  }

  @keyframes icon {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1.3);
      }
  }

`
