import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import "./Cadastro.css"
import limpandoEscritório from '../../public/homem-limpeza-seu-lar.jpg'

function Cadastro() {
    return (
        <div className="d-flex w-100 h-100 align-items-center"> 
        <div className=" w-100 ">
            <h1 className="m-3 d-flex justify-content-center fw-bold "> Faça parte</h1>
            <form className="px-5 d-flex flex-column mx-5" id="forms"action="Cadastrar" method="post">
                <label className=" mt-2 mx-2 " htmlFor="nome" >Nome</label>
                <input className="rounded-3 border border-dark p-2" type="text" id="nome" />

                <label className=" mt-2 mx-2" htmlFor="email">Email</label>
                <input className="rounded-3 border border-dark p-2" type="email" id="email" />

                <label className=" mt-2 mx-2" htmlFor="senha">Senha</label>
                <input className="rounded-3 border border-dark p-2"type="password" id="senha"/>

                <label className=" mt-2 mx-2" htmlFor="confirmSenha" id="labelat">Confimar Senha</label>
                <input className="rounded-3 border border-dark p-2 " type="password" id="confirmSenha"/>

                <div className="mx-2">
                <input className="mx-2 my-4" type="checkbox" id="aceitarTermos"/>
                <label htmlFor="aceitarTermos">Aceito os termos de Uso</label>
                </div>

                <button className="btn btn-primary rounded-3 border border-light" style={{background:"#157E41"}}> Criar conta </button>
            </form>
        </div>
        <div className="w-50" >
            <img src={limpandoEscritório} alt="Uma pessoa limpando o chão com um esfregão, utilizando luvas e um macacão, dentro de um escritório com utensilios de limpeza perto do seu alcance" style={{ height:"100vh"}}/>
        </div>
        </div>
    )
}

export default Cadastro