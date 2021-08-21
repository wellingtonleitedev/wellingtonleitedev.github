import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: #f5f5f5;
    color: #000000a7;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif
  }

  h2 {
    color: #283e4a;
  }

  a, a:hover {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export const Wrapper = styled.section`
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0px rgba(43, 41, 45, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
