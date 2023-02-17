import React from 'react';
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
     return (
     <>
          <ToastContainer autoClose={3000} 
          position="top-center"
          />
          <RoutesApp />
     </>

     );
}