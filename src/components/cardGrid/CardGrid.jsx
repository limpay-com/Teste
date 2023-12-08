
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

  );
}

export default CardGrid;
