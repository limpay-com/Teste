import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './components/cadastro/Cadastro.jsx';
import Login from './components/login/Login.jsx';
import Inicio from './components/inicio/Inicio.jsx';
import QuemSomos from './components/quemsomos/QuemSomos.jsx';
import Suporte from './components/suporte/Suporte.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/cadastro',
        element: <Cadastro></Cadastro>,
      },
      {
        path: '/',
        element: <Inicio />,
      },
      {
        path: '/quemSomos',
        element:<QuemSomos></QuemSomos>
      },
      {
        path: '/suporte',
        element:<Suporte></Suporte>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
