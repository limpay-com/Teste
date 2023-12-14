import Styles from './IA.css'
import IAimg from '../../../assets/images/crescimentoTecnologico/IA.svg'

function IA() {
    return(
        <>
            <div className='d-flex justify-content-center align-items-center w-100'>
                <div className="align-self-center d-inline-block align-self-end c-valores f-azul p-2       ">
                    <h3 className="p-branco m-2 mx-4 mt-3 t-azul"> IA</h3>
                    <p className='p-branco p-2 m-2'>
                    Terá uma inteligência artificial que servira como suporte, respondendo a todas perguntas que os clientes tiverem e as perguntas serão pré definidas para facilitar o contato. .

                    </p>
                </div>
                <div className=" d-inline-block my-4">
        
                    <img id='img-IA' src={IAimg} alt="" />
                </div>
            </div>
        </>
    )
}

export default IA