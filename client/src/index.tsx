import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from './router/Router'
import theme from './styles/theme';
import {RecoilRoot} from 'recoil' 
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID as string}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
            <RouterProvider router={router}/>
        </RecoilRoot>
      </ThemeProvider>
    </GoogleOAuthProvider> */}
  </React.StrictMode>
);