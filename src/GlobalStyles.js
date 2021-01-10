import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  :root {
    --text-family: "Roboto Mono", monospace;
    --header-family: "Roboto Slab", monospace;
    --primary: rebeccapurple;
    --secondary: #f8f9fa;
    --text-primary: var(--secondary);
    --text-secondary: #212529;
    --action: #f4166e;
    --gradient-dark: linear-gradient(
      0deg,
      rgba(40, 18, 89, 1) 0%,
      rgba(109, 16, 126, 1) 59%,
      rgba(20, 9, 43, 1) 100%
    );

    --transition: all 0.5s ease;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html{
    scroll-behavior: smooth;
    width: 100%;
    min-width: 100vw;
  }
  #root {
    min-height: 100vh;
    height: 100%;
  }

  body {
    font-family: var(--text-family);
    background: var(--gradient-dark);
    color: var(--text-primary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-family);
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  h1,
  h2 {
    font-size: clamp(1.5rem,calc(1.5rem + 2.5vw),4rem);
    font-weight: 300;
    line-height: 1.2;
  }
  h4 {
    font-size: clamp(1rem,calc(1.5rem + 1.25vw),2rem);
  }
  h5 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 0.75rem;
  }
  a {
    color: gold;
    text-decoration: underline 2px gold;
  }
`;

export default GlobalStyle;
