import React from 'react';
import './Carrossel.css';

const Carrossel = () => {
  return (
    <div className="col-md-12">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/images/carrossel/Jarra-vaso-flor.jpg"
              className="rounded d-block w-100 carrossel-image"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h2>Parcerias</h2>
              <p>Quem transforma junto com a Limpay</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/images/carrossel/mulher-quarto.jpg"
              className="rounded d-block w-100 carrossel-image"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h2>Fazendo a limpa</h2>
              <p>Capacite-se com a gente</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/images/carrossel/balde-produtos.jpg"
              className="rounded d-block w-100 carrossel-image"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h2>Quem somos</h2>
              <p>O que move a Limpay.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
