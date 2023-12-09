import React from 'react';
import './Footer.css'; // Estilos CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* Coluna para a logo */}
            <img src="caminho/para/sua/logo.png" alt="Logo" className="footer-logo" />
          </div>
          <div className="col-md-6">
            {/* Colunas: Sobre, Serviços, Suporte */}
            <div className="row">
              <div className="col-md-4">
                <h4>Sobre</h4>
                <ul>
                  <li><a href="#">Quem somos</a></li>
                  <li><a href="#">Missão, Visão e Valores</a></li>
                  <li><a href="#">Termos de Serviço</a></li>
                  <li><a href="#">Política de Privacidade</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Serviços</h4>
                <ul>
                  <li><a href="#">Contratação</a></li>
                  <li><a href="#">Perfil</a></li>
                  <li><a href="#">Carteira</a></li>
                  <li><a href="#">Educacional</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Suporte</h4>
                <ul>
                  <li><a href="#">Tutorial</a></li>
                  <li><a href="#">Centro de Ajuda</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* Coluna: Siga nossas redes sociais */}
            <div className="footer-social">
              <h4>Siga as nossas redes sociais:</h4>
              {/* Adicione aqui os ícones das redes sociais */}
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            {/* Copyright */}
            <p>@{new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;