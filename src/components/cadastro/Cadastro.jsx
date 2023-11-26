import React from 'react';
import './Cadastro.css';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import limpandoEscritório from '../../assets/images/homem-limpeza-seu-lar.jpg';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';

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

function MostrarConfirmSenha() {
  const olhoFechado = document.querySelector('.FaRegEyeSlash');
  const confirmSenha = document.querySelector('#inputConfimarSenha');

  if (confirmSenha.type === 'password') {
    confirmSenha.setAttribute('type', 'text');
    olhoFechado.classList.add('hide');
  } else {
    confirmSenha.setAttribute('type', 'password');
    olhoFechado.classList.remove('hide');
  }
}

function Cadastro() {
  return (
    <>
    <div className="d-flex align-items-center body" id='conteiner'>
      <div id="cadastro-form" className='p-3'>
        <form
          className="px-2 px-lg-5 d-flex flex-column mx-lg-5 mx-3 gap-1 "
          id="forms"
          action="Cadastrar"
          method="post"
        >
          <h1 className=" d-flex justify-content-start fw-bold ">Cadastre-se</h1>
          <label className="mx-2 " htmlFor="nome">
            Nome
          </label>
          <input
            className="rounded-3 border border-dark p-2"
            type="text"
            id="nome"
            placeholder="Insira seu nome completo"
          />
          <label className="mx-2" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-3 border border-dark p-2"
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
          />
          <label className="mx-2 " htmlFor="senha">
            Senha
          </label>
          <input
            id="inputSenha"
            className="rounded-3 border border-dark p-2 senha"
            type="password"
            placeholder="Insira sua senha"
          />
          <FaRegEyeSlash
            className="icone-cadastro "
            onClick={MostrarSenha}
          ></FaRegEyeSlash>
          <label className="mx-2 " htmlFor="confirmSenha" id="labelat">
            Confimar Senha
          </label>
          <input
            id="inputConfimarSenha"
            className="rounded-3 border border-dark p-2 senha"
            type="password"
            placeholder="Confirme sua senha"
          />
          <FaRegEyeSlash
            className="icone-cadastro"
            onClick={MostrarConfirmSenha}
          ></FaRegEyeSlash>
          {/* <div className="mx-2 ">
            <input className="mx-auto " type="checkbox" id="aceitarTermos" />
            <label htmlFor="aceitarTermos">Aceito os termos de Uso</label>
          </div> */}
          <div className="mx-2" id="select">
            <p className="mx-auto mb-4">
              Ao clicar en Criar nova conta, você concorda com nossos
              <a href="" className="link ">
                Termos e politicas e privacidade
              </a>
            </p>
          </div>
          <button
            className="btn btn-primary my-1 p-2 rounded-3 border border-light fw-bold"
          >
            Criar nova conta
          </button>
          <div className="mx-auto">
            <p className="mx-auto my-2 fw-bold">
              <Link to="/login">já possui uma conta? <a href="" className='d-inline link-primary'>faça o login</a> <IoIosArrowForward /></Link>
              {/* O icone precisa ficar na mesma linha que o texto para não ficar na linha de baixo */}
            </p>
          </div>
        </form>
      </div>
      <div className="w-100 h-100" id="container-background">
        <img
          id="background"
          src={limpandoEscritório}
          alt="Uma pessoa limpando o chão com um esfregão, utilizando luvas e um macacão, dentro de um escritório com utensilios de limpeza perto do seu alcance"
          style={{ height: '100vh' }}
        />
      </div>
    </div>
    </>
  );
}

export default Cadastro;
