import './Planos.css'
import Card1 from '../../assets/images/planos/card 1.svg'
import Card2 from '../../assets/images/planos/card 2.svg'
import Card3 from '../../assets/images/planos/card 3.svg'

function Planos() {
 return(
    <>
        <div className='w-100 h-100'>
            <h3 className='d-flex justify-content-center '>Também teremos uma parte de planos</h3>
            <div className='d-flex justify-content-center m-2'>
                <img className='img-card-planos' src={Card1} alt="" />
                <img className='img-card-planos' src={Card2} alt="" />
                <img className='img-card-planos' src={Card3} alt="" />
            </div>
        </div>
    </>
 )
}

export default Planos