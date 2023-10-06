import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles'
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <ToastContainer autoClose={3000} position="top-center"/>
          <Routes />
     <GlobalStyles/>
  </>
);

