import LimpezaEmgrupoimg from '../../../assets/images/crescimentoTecnologico/LimpezaEmGrupo.svg'
import Styles from './LimpezaEmGrupo.css'

function LimpezaEmGrupo() {
    return(
        <>
            <div className='d-flex justify-content-center align-items-center w-100'>
            <div className=" d-inline-block my-4">
        
                <img id='img-LimpemGrupo' src={LimpezaEmgrupoimg} alt="" />
            </div>
                <div className="align-self-center d-inline-block align-self-end c-valores p-2">
                    <h3 className=" m-2 mx-2 mt-3 t-azul"> Limpeza em grupo</h3>
                    <p className='p-2 m-2'>
                    Terá a função de limpeza em grupo, onde o contratante poderá contratar serviços com mais de uma pessoa, assim poderemos expandir o negócio para além de casas e apartamentos, mas também para eventos, empresas, festas e outros.
                    </p>
                </div>
            </div>
        </>
    )
}

export default LimpezaEmGrupo