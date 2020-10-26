import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
     padding: 0;
     box-sizing: border-box; 
  }
  html {
    min-height: 100%;
    background: var(--primary);

  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: var(--black);
  }
  ul {
    list-style: none;
  }
  :root {
    --primary: #fff;
    --black: #1b1f23;
    --gray: #586069;
    --gray-light: #6a737d;
    --gray-dark: #24292e;
    --orange: #f9826c;
    --logo: #fff;
    --header: #292961;
    --username: #666;
    --search: rgba(255, 255, 255, 0.13);
    --search-placeholder: hsla(0, 0%, 100%,.75);
    --icon: #6a737d;
    --link: #0366d6;
    --border: #e1e4e8;
    --ticker: rgba(209,213,218,.5);
  }

`;