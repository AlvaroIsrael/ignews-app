import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-800: #29292e;
    --gray-900: #121214;
    --cyan-500: #61dafb;
    --yellow-500: #eba417;
  }

  @media screen and (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
