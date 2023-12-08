import React from 'react';
import './CardPerfil.css';
import Fotomulher from '../../../src/assets/images/cardPerfil/exemplo.jpg'
import ChevronRight from '../../../src/assets/images/cardPerfil/chevron-right.svg'
import Star from '../../../src/assets/images/cardPerfil/Star1.svg'

const CardPerfil = () => {

  return (
    <div>
    <div class="card card-profile " >
  <div className='color'>
      <div className="img1">
          <img className='img-fluid img-thumbnail background' src={Fotomulher} alt="" />
      </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">Silvio <img src={ChevronRight} style={{width: 30 ,height: 30}} /></h5>
    <p class="card-text-localizacao">Lapa - SP</p>
    <p class="card-text-preco">R$100 - 200,00 dia  <span><img className='mx-2 mb-1' src={Star}/>5.0</span></p>
    <div className='d-flex align-items-start align-content-start gap-1 flex-wrap w-100 mt-2'>
      <a href="#" class="d-inline bg-light customizado-botao">Cozinha</a>
      <a href="#" class="d-inline bg-light customizado-botao">sala de estar</a>
      <a href="#" class="d-inline bg-light customizado-botao">Quarto</a>
      <a href="#" class="d-inline bg-light customizado-botao">Quarto</a>
      <a href="#" class="d-inline bg-light customizado-botao">Quarto</a>
      <a href="#" class="d-inline bg-light customizado-botao">Banheiro</a>
    </div>
  </div>
</div>


    
    </div>
  );
};

export default CardPerfil;
