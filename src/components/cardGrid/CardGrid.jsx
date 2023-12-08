import { grep } from 'jquery';
import CardPerfil from '../cardPerfil/CardPerfil';
import './CardGrid.css'
import { motion } from 'framer-motion'
import { useState,useEffect, useRef } from 'react';

function CardGrid() {

  const usuarios = [<CardPerfil/> ,<CardPerfil/>, <CardPerfil/>, <CardPerfil/>, <CardPerfil/> ]

  const carousel = useRef();
  const [width , setWidth] = useState(0)
  
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (


    <> 

      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner'
        drag="x"
        dragConstraints={{ right: 0 , left: -width}}
        >

          {usuarios.map(usuario => (
            <motion.div className="cards-wrapper" key={usuario}>
              {usuario}
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    
    </>
    // <div>
    //   <div className="row">
    //     <div className="col-sm">
    //       <CardPerfil nameUsuario="Silvio" localizacao="Guarulhos - SP" avaliacao="5.0"/>
    //     </div>
    //     <div className="col-sm">
    //     <CardPerfil nameUsuario="Rebeca" localizacao="Grajau - SP" avaliacao="5.0"/>
    //     </div>
    //     <div className="col-sm">
    //     <CardPerfil nameUsuario="Alexandre Lemes" localizacao="Mogi - SP" avaliacao="5.0"/>
    //     </div>
    //   </div>
    // </div> -------------------------------------------

    /* <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <div className="cards-wrapper">
      <CardPerfil></CardPerfil>
      </div>
    </div>
    <div class="carousel-item ">
    <div className="cards-wrapper">
      <CardPerfil></CardPerfil>
      </div>
    </div>
    <div class="carousel-item ">
    <div className="cards-wrapper">
      <CardPerfil></CardPerfil>
      </div>
    </div>
    <div class="carousel-item ">
    <div className="cards-wrapper">
      <CardPerfil></CardPerfil>
      </div>
    </div>
    <div class="carousel-item ">
    <div className="cards-wrapper">
      <CardPerfil></CardPerfil>
      </div>
    </div>
    <div class="carousel-item ">
    <div className="cards-wrapper">
      <CardPerfil></CardPerfil>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -----------------------------------------*/




  );
}

export default CardGrid;
