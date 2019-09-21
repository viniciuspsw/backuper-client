import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Google+Sans');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    font-size: 1rem;
    text-align: left;
    letter-spacing: 0.5px;
    background-color: #fff;
  }

  #root {
    height: 100%;
    display: flex;
  }

  .container {
    display: flex;
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.background};
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    content: ' ';
    background-color: ${colors.primary};
    z-index: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;
