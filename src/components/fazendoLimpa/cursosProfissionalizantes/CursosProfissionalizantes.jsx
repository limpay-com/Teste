import './CursosProfissionalizantes.css'
import Player1 from '../../../assets/images/cursosProfissionalizantes/Player-1.png'
import Player2 from '../../../assets/images/cursosProfissionalizantes/Player-2.png'
import Player3 from '../../../assets/images/cursosProfissionalizantes/Player-3.png'
import Player4 from '../../../assets/images/cursosProfissionalizantes/Player-4.png'
import Player5 from '../../../assets/images/cursosProfissionalizantes/Player-5.png'
import Player6 from '../../../assets/images/cursosProfissionalizantes/Player-6.png'
import { Link } from 'react-router-dom'

function CursosProfissionalizantes() {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center flex-wrap'>
            <div className=' m-4 largura-cursosprofissionalizantes'>
                <img className='largura-cursosprofissionalizantes' src={Player1} alt="" />

                <h2 className='fs-5 text-center p-2'>TÉCNICAS AVANÇADAS DE LIMPEZA PROFISSIONAL</h2>
            </div>
            <div className=' m-4 largura-cursosprofissionalizantes'>
                <img className='largura-cursosprofissionalizantes' src={Player2} alt="" />

                <h2 className='fs-5 text-center p-2'>LAVAGEM E LIMPEZA DE LOUÇA</h2>
            </div>
            <div className=' m-4 largura-cursosprofissionalizantes d-inline-block'>
                <img className='largura-cursosprofissionalizantes' src={Player3} alt="" />

                <h2 className='fs-5 text-center p-2'>ORGANIZAÇÃO DE AMBIENTE</h2>
            </div>
            <div className=' m-4 largura-cursosprofissionalizantes d-inline-block'>
                <img className='largura-cursosprofissionalizantes' src={Player4} alt="" />

                <h2 className='fs-5 text-center p-2'>LAVAGEM DE SOFÁS</h2>
            </div>
            <div className=' m-4 largura-cursosprofissionalizantes d-inline-block'>
                <img className='largura-cursosprofissionalizantes' src={Player5} alt="" />

                <h2 className='fs-5 text-center p-2'>ORGANIZAÇÃO DE GUARDA-ROUPAS</h2>
            </div>
            <div className=' m-4 largura-cursosprofissionalizantes d-inline-block'>
                <img className='largura-cursosprofissionalizantes' src={Player6} alt="" />

                <h2 className='fs-5 text-center p-2'>LIMPEZA DE ARMÁRIOS</h2>
            </div>

            
        </div>
        <button className=" btn btn-primary m-4" ><Link to="/educacional/opcoes" className="p-branco text-decoration-none"> voltar</Link></button>
        </>
    )
}

export default CursosProfissionalizantes