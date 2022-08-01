import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 120%;
  }
  body {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
