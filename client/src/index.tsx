import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from './router/Router'
import theme from './styles/theme';
import {RecoilRoot} from 'recoil' 
import { HelmetProvider } from 'react-helmet-async';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
            <HelmetProvider>
              <RouterProvider router={router}/>
            </HelmetProvider>
        </RecoilRoot>
      </ThemeProvider>
  </React.StrictMode>
);