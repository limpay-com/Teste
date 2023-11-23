import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Cadastro from './components/cadastro/Cadastro.jsx';
import Login from './components/login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        {
          path: "/",
          element: <Login></Login>
        },
        {
          path: "Cadastro",
          element: <Cadastro></Cadastro>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
