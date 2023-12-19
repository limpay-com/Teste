import './Pagamento.css'
import Dinheiro from '../../../assets/images/fazendoalimpa/Dinheiro.png'
import { Link } from 'react-router-dom'

function Pagamento() {
    return (
        <>
            <h2 className='fw-bold text-center m-4'>PARA COLOCAR O SELO NO SEU PERFIL É NECESSARIO O PAGAMENTO!</h2>
            <div className='d-flex justify-content-center'>
                <p className='w-50 m-4 p-4 p-pagamento fs-4'>Para você conseguir colocar o selo na plataforma é necessario pagar uma pequena
                    taxa por ele. O dinheiro é retirado da sua
                    carteira de forma pratica e o selo aparece no seu perfil de imediato!</p>

                <img src={Dinheiro} alt="" />
            </div>

            <div className='d-flex justify-content-around mt-4 w-100'>
                <button className=" btn btn-primary m-4 btn-voltar" ><Link to="/fazendoalimpa/" className="p-branco text-decoration-none"> voltar</Link></button>
                <button className=" btn btn-primary m-4" ><Link to="/perfil" className="p-branco text-decoration-none"> Adicionar ao Perfil</Link></button>
            </div>
        </>
    )
}

export default Pagamento