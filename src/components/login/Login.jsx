import React from "react";
import "./Login.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io"
import limpandoEscritório from '../../assets/images/homem-limpeza-seu-lar.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";


function MostrarSenha() {
    const olhoFechado = document.querySelector(".FaRegEyeSlash")
    const senha = document.querySelector("#inputSenha")

    if(senha.type === "password"){
        senha.setAttribute('type', 'text');
        olhoFechado.classList.add('hide')

    } else {
        senha.setAttribute('type' ,"password")
        olhoFechado.classList.remove('hide')
        
    }



}


function Login() {
    return (
        <div className="d-flex align-items-center w-100"> 
        <div id="cadastro-form w-50">
            
            <form className="px-5 d-flex flex-column mx-5 gap-1  " id="forms" action="Cadastrar" method="post">
            <h1 className=" d-flex justify-content-start fw-bold ">Login</h1>

                <label className="mx-2" htmlFor="email">Email</label>
                <input className="rounded-3 border border-dark p-2" type="email" id="email" placeholder="Insira seu e-mail" />

                <label className="mx-2 " htmlFor="senha">Senha</label>
                <input id="inputSenha" className="rounded-3 border border-dark p-2 senha"type="password"  placeholder="Insira sua senha" /> <FaRegEyeSlash className="icone iconesenhafechado" onClick={MostrarSenha}></FaRegEyeSlash> 

                <div className="mx-2 mb-4">
                <input className="mx-auto " type="checkbox" id="lembrarSenha"/>
                <label htmlFor="lembrarSenha">Lembrar senha</label>
                </div>

                <div className="mx-2 d-flex gap-4 justify-content-center mb-4">
                    <div className="btn fundo p-2" id="facebook" style={{background:"#3370F1", color:"#ffff"}}>
                        <FaFacebook className="logoRedesSociais"></FaFacebook>
                    </div>
                    <div className="btn fundo p-2" id="google" style={{background:"#F6F6F6" }}>
                        <FcGoogle className="logoRedesSociais" ></FcGoogle>
                    </div>
                    <div className="btn fundo p-2" id="apple" style={{background:"#000000", color:"#ffff"}}>
                        <FaApple className="logoRedesSociais" ></FaApple>
                    </div>
                </div>



                <button className="btn btn-primary my-2 p-2 rounded-3 border border-light fw-bold" style={{background:"#157E41"}}> Entrar  </button>

               <Link to="Cadastro" id="btn-criarConta"><button className="btn btn-secundary my-2 p-2 rounded-3 fw-bold " style={{background:"#ffff", border:"1px solid #157E41" , color:"#157E41"}} >  Criar conta</button></Link> 
                

                <div  className="mx-auto">
                <p  className="mx-auto my-2 fw-bold text-decoration-underline"> Não consegue entrar?  <IoIosArrowForward /></p>
                </div>
            </form>
        </div>
        <div className="w-100 h-80" >
            <img id="background" src={limpandoEscritório} alt="Uma pessoa limpando o chão com um esfregão, utilizando luvas e um macacão, dentro de um escritório com utensilios de limpeza perto do seu alcance" style={{ height:"100vh"}}/>
        </div>
        </div>
    )
}

export default Login