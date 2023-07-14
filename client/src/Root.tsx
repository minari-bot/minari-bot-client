import React from 'react';
import {Outlet} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './components/common/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from './components/common/Navigation';

function Root() {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>
      <div>
        <GlobalStyles/>
        <Navigation/>
        <Container><Outlet/></Container>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>

}
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans";
    src: url();
  }
  html{ 
    font-size: 62.5%;
  }
  a {color: ${props => props.theme.light.black}; text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none; color:${props => props.theme.light.black};}

  body {
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: ${props => props.theme.light.backgroundGray};
  color: ${props => props.theme.light.black};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  h1,h2,h3,h4{
    margin: 0;
  }
  button {
    background : none;
    border : 0;
  }
  input{
    border: 0;
    &:focus{
      outline: 0;
    }
  }
  ul{
    margin: 0;
  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10rem;
`
export default Root;
  