import {Outlet} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navigation from './components/common/Navigation';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import { toastState } from './atoms/toast';
import Toasts from './components/common/Toasts';
import { queryClient } from './react-query/queryClient';
import './Root.css';
import { Helmet } from 'react-helmet-async';
const ToastPortal = () => {
  const [ toast, setToast ] = useRecoilState(toastState);
  return <>
    {toast.state !== "none" && createPortal(
        <Toasts />,
        document.body
      )}
  </>
}
function Root() {
  return <QueryClientProvider client={queryClient}>
    <>
      <Helmet><title>MINARI·BOT</title></Helmet>
      <GlobalStyles/>
      <Navigation/>
      <Container>
        <Outlet/>
        <ToastPortal/>
      </Container>
      <ReactQueryDevtools initialIsOpen={false}/>
    </>
  </QueryClientProvider>

}
const GlobalStyles = createGlobalStyle`
  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  html{ 
    font-size: 62.5%;
  }
  a {color: ${props => props.theme.light.black}; text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none; color:${props => props.theme.light.black};}
  
  body {
  min-height: 100vh;
  margin: 0 auto;
  /* overflow-x: hidden; */
  background-color: ${props => props.theme.light.backgroundGray};
  color: ${props => props.theme.light.black};
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  button {
    background : none;
    border: 0;
    font-family: 'Noto Sans', sans-serif;

  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 0 10rem; */
`
export default Root;
  