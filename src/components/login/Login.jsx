import React from 'react';
import './Login.css';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import limpandoEscritório from '../../assets/images/homem-limpeza-seu-lar.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MostrarSenha() {
  const olhoFechado = document.querySelector('.FaRegEyeSlash');
  const senha = document.querySelector('#inputSenha');

  if (senha.type === 'password') {
    senha.setAttribute('type', 'text');
    olhoFechado.classList.add('hide');
  } else {
    senha.setAttribute('type', 'password');
    olhoFechado.classList.remove('hide');
  }
}

function Login() {
  return (
    <div className="d-flex align-items-center body" id='conteiner'>
      <div id="login-form">
        <form
          className="px-2 px-lg-5 d-flex flex-column mx-sm-5 gap-3 gap-lg-1"
          id="forms"
          action="Cadastrar"
          method="post"
        >
          <h1 className=" d-flex justify-content-start fw-bold ">Login</h1>
          <label className="mx-2 label" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-3 border border-dark p-2"
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
          />
          <label className="mx-2 label" htmlFor="senha">
            Senha
          </label>
          <input
            id="inputSenha"
            className="rounded-3 border border-dark p-2 senha"
            type="password"
            placeholder="Insira sua senha"
          />{' '}
          <FaRegEyeSlash
            className="icone iconesenhafechado"
            onClick={MostrarSenha}
          ></FaRegEyeSlash>
          <div className=" mb-2 d-lg-flex justify-content-between ">
            <div>
              <input className="mx-auto mb-4" type="checkbox" id="lembrarSenha" />
              <label htmlFor="lembrarSenha">Lembrar senha</label>
            </div>


            <a href="" className='d-inline link-primary'><span className='link' id='esqueceuSenha'>Esqueceu sua senha ?</span></a>
          </div>
          {/* <div className="mx-2 d-flex gap-4 justify-content-center mb-4 RedesSociais">
            <div
              className="btn fundo p-2"
              id="facebook"
              style={{ background: '#3370F1', color: '#ffff' }}
            >
              <FaFacebook className="logoRedesSociais"></FaFacebook>
            </div>
            <div
              className="btn fundo p-2"
              id="google"
              style={{ background: '#F6F6F6' }}
            >
              <FcGoogle className="logoRedesSociais"></FcGoogle>
            </div>
            <div
              className="btn fundo p-2"
              id="apple"
              style={{ background: '#000000', color: '#ffff' }}
            >
              <FaApple className="logoRedesSociais"></FaApple>
            </div>
          </div> */}
          <button
            className="btn btn-primary my-2 p-2 rounded-3 border border-light fw-bold"

          >
            {' '}
            Entrar{' '}
          </button>
          
            {/* <button
              className="btn btn-secundary my-2 p-2 rounded-3 fw-bold "
              style={{
                background: '#ffff',
                border: '1px solid #157E41',
                color: '#157E41',
              }}
            >
              {' '}
              Criar conta
            </button> */}
          
          <div className="mx-auto">
            <p className="mx-auto my-2 fw-bold text-decoration-underline">
              {' '}
              Não tem uma conta? <Link to="/cadastro" id="btn-criarConta" className='d-inline link-primary'>  Cadastre-se<IoIosArrowForward /></Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-100 h-80" id='container-background'>
        <img
          id="background"
          src={limpandoEscritório}
          alt="Uma pessoa limpando o chão com um esfregão, utilizando luvas e um macacão, dentro de um escritório com utensilios de limpeza perto do seu alcance"
          style={{ height: '100vh' }}
        />
      </div>
    </div>
  );
}

export default Login;
