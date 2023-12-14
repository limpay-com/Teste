import "./OpcoesEducacional.css"
import { FaArrowRight } from "react-icons/fa";


function OpcoesEducacional() {
    return(
        <div className="w-100 h-100 fundo-inicial ">
            <div className="c-opcoes d-flex flex-column">
                <span className="btn-plataforma fw-bold fs-5 p-4 m-3">POR DENTRO DA PLATAFORMA</span>
                <p className="p-branco p-opcoes fs-4">
                AQUI VOCÊ VAI CONSEGUIR ENTENDER COMO A PLATAFORMA FUNCIONA E SOBRE AS FUNCIONALIDADES QUE TRAZEMOS PARA VOCÊ
                </p><FaArrowRight className="i-opcoes"></FaArrowRight>
            </div>
            <div className="c-opcoes">

            </div>
        </div>
    )
}

export default OpcoesEducacional