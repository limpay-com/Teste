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
import Educacional from './components/fazendoLimpa/educacional.jsx';
import OpcoesEducacional from './components/fazendoLimpa/opçõesEducacional/OpcoesEducacional.jsx';
import CursosProfissionalizantes from './components/fazendoLimpa/cursosProfissionalizantes/cursosProfissionalizantes.jsx';
import FazendoLimpa from './components/fazendoLimpa/fazendoALimpa/FazendoALimpa.jsx';
import Certificado from './components/fazendoLimpa/certificado/Certificado.jsx';
import Pagamento from './components/fazendoLimpa/pagamento/Pagamento.jsx';
import Contrato from './components/Contrato/Contrato.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import Cadastro02 from './components/cadastro02/Cadastro02.jsx';
import Inicio2 from './components/inicio2/Inicio2.jsx';
import Procuradeprofissionais from './components/procuradeprofissionais/Procuradeprofissionais.jsx'

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
      },{
        path: '/educacional',
        element: <Educacional></Educacional>
      },{
        path: '/educacional/opcoes',
        element: <OpcoesEducacional></OpcoesEducacional>
      },{
        path: '/cursosprofissionalizantes',
        element: <CursosProfissionalizantes></CursosProfissionalizantes>
      },{
        path: '/fazendoalimpa' ,
        element: <FazendoLimpa></FazendoLimpa>
      },{
        path: '/fazendoalimpa/certificado',
        element: <Certificado></Certificado>
      },{
        path: '/pagamento',
        element: <Pagamento></Pagamento>
      },{
        path: '/contrato',
        element: <Contrato></Contrato>
      },{
        path: '/formulario',
        element:<Formulario></Formulario>
      },{
        path: '/cadastro02',
        element: <Cadastro02></Cadastro02>
      },{
        path: '/inicio' ,
        element: <Inicio2 />
      },{
        path: '/procuradeprofissionais',
        element: <Procuradeprofissionais></Procuradeprofissionais>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
