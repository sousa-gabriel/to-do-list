import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme["gray600"]};
    color: ${(props) => props.theme["gray100"]};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purpleDark"]};
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`;
