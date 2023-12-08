import React from 'react';
import './CardPerfil.css';
import Fotomulher from '../../../src/assets/images/cardPerfil/exemplo.jpg'
import ChevronRight from '../../../src/assets/images/cardPerfil/chevron-right.svg'
import Star from '../../../src/assets/images/cardPerfil/Star1.svg'

const CardPerfil = () => {

  return (
    <div>
      {/* style={{width: 300}} */}
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
    // <div className="mt-4">
    //   {/* <div className="row justify-content-between">
    //     <div className="col-md mb-4">
    //       <div className="card">
    //         <div className="color"></div>
    //         <div className="img1">
    //           <img src="./src/assets/images/cardPerfil/exemplo.jpg" alt="" />
    //         </div>
    //         <div className="main d-flex flex-column gap-3">
    //           <h2>Maria Silva</h2>
    //           <div className="text-center d-flex container-filtros flex-wrap">
    //             <a
    //               className="d-inline bg-light customizado-botao"
    //             >
    //               Cozinha
    //             </a>
    //             <a
    //               className="d-inline bg-light customizado-botao"
    //             >
    //               Lavanderia
    //             </a>
    //             <a
    //               className="d-inline bg-light customizado-botao"
    //             >
    //               Cozinha
    //             </a>
    //             <a
    //               className="d-inline bg-light customizado-botao"
    //             >
    //               Sala de Jantar
    //             </a>
                

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default CardPerfil;
