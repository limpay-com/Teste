import React from 'react';
import './CardPerfil.css';

const CardPerfil = () => {
  return (
    <div className="mt-4">
      <div className="row justify-content-between">
        <div className="col-md mb-4">
          <div className="card">
            <div className="color"></div>
            <div className="img1">
              <img src="./src/assets/images/cardPerfil/exemplo.jpg" alt="" />
            </div>
            <div className="main">
              <h2>Maria Silva</h2>
              <div className="container text-center">
                <button
                  type="button"
                  className="btn btn-success btn-xs customizado-botao"
                >
                  Cozinha
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-xs customizado-botao"
                >
                  Lavanderia
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-xs customizado-botao"
                >
                  Cozinha
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-xs customizado-botao"
                >
                  Sala de Jantar
                </button>
                <a href="http:// " className="mb-4">
                  Mais informações
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerfil;
