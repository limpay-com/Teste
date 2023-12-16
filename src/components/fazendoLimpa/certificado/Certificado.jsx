import './Certificado.css'
import { Link } from 'react-router-dom'
import certificado from '../../../assets/images/fazendoalimpa/Certificado de Participação Fotografia Azul-Petróleo.png'

function Certificado() {

    function print() {
        setTimeout(() => {
            window.print()
        }, 1000);
        
    }


    const usuario = ["Silvio Gabriel Gomes Santana"]

    return (
        <div id='pagina-certificado' className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='m-2'>Parabéns por concluir essa etapa na nossa plataforma!</h2>
            <p> abaixo segue seu certificado</p>
            <div className=' m-4' id='c-certificado' >
                <h3 className="nome-certificado">{usuario} </h3>
                <img className='certificado' src={certificado} alt="" />
            </div>

            <div className='d-flex justify-content-around mt-4 w-100'>
                <button className=" btn btn-primary m-4 btn-voltar" ><Link to="/fazendoalimpa" className="p-branco text-decoration-none"> voltar</Link></button>
                <div>
                    <button className=" btn btn-primary m-4" ><Link to="/pagamento" className="p-branco text-decoration-none"> Adicionar ao Perfil</Link></button>
                    <a to="#" onClick={print()} className="p-branco text-decoration-none"> Imprimir</a>
                </div>


            </div>
        </div>
    )
}

export default Certificado