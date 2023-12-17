import React from 'react';
import './CardPerfil.css';
import Fotomulher from '../../../src/assets/images/cardPerfil/exemplo.jpg'
import ChevronRight from '../../../src/assets/images/cardPerfil/chevron-right.svg'
import Star from '../../../src/assets/images/cardPerfil/Star1.svg'

function CardPerfil({
  habilidade1,
  habilidade2,
  habilidade3,
  habilidade4,
  habilidade5,
  habilidade6,
  usuario,
  localização,
  minDiaria,
  maxDiaria,
  avaliacao,
  fotoPerfil
}) {


  return (
    <div>
      <div class="card card-profile " >
        <div className='color'>
          <div className="img1">
            <img className='img-fluid img-thumbnail background' src={fotoPerfil} alt="" />
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{usuario}<img src={ChevronRight} style={{ width: 30, height: 30 }} /></h5>
          <p class="card-text-localizacao">{localização}</p>
          <p class="card-text-preco">R${minDiaria} - {maxDiaria} dia  <span><img className='mx-2 mb-1' src={Star} />{avaliacao}</span></p>
          <div className='d-flex align-items-start align-content-start gap-1 flex-wrap w-100 mt-2'>
            <a href="#" class="d-inline bg-light customizado-botao">{habilidade1}</a>
            <a href="#" class="d-inline bg-light customizado-botao">{habilidade2}</a>
            <a href="#" class="d-inline bg-light customizado-botao">{habilidade3}</a>
            <a href="#" class="d-inline bg-light customizado-botao">{habilidade4}</a>
            <a href="#" class="d-inline bg-light customizado-botao">{habilidade5}</a>
            <a href="#" class="d-inline bg-light customizado-botao">{habilidade6}</a>
          </div>
        </div>
      </div>



    </div>
  );
};

export default CardPerfil;
