import "./OpcoesEducacional.css"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function OpcoesEducacional() {
    return(
        <div className="w-100 h-100 fundo-inicial d-flex flex-column align-items-center justify-content-between gap-3 ">
            <div className="c-opcoes d-flex flex-column">
                <span className="btn-plataforma fw-bold fs-5 p-4 m-3">POR DENTRO DA PLATAFORMA</span>
                <p className="p-branco p-opcoes fs-4 m-3">
                AQUI VOCÊ VAI CONSEGUIR ENTENDER COMO A PLATAFORMA FUNCIONA E SOBRE AS FUNCIONALIDADES QUE TRAZEMOS PARA VOCÊ
                </p><Link to="/fazendoalimpa" ><button className=" i-opcoes" style={{backgroundColor: "white"}}><FaArrowRight></FaArrowRight></button></Link>
            </div>
            <div className="c-opcoes d-flex flex-column">
                <span className="btn-plataforma fw-bold fs-5 p-4 m-3">CURSOS PROFISSIONALIZANTES</span>
                <p className="p-branco p-opcoes fs-4 m-3">
                AQUI VOCÊ VAI SE CAPACITAR AINDA MAIS E ADQUIRIR MAIS CONHECIMENTO ATRAVÉS DE CURSOS E CERTIFICADOS
                </p><Link to="/cursosprofissionalizantes" ><button className=" i-opcoes" style={{backgroundColor: "white"}}><FaArrowRight></FaArrowRight></button></Link>
            </div>
            <div className="align-self-start m-4">
                <button className=" btn btn-primary " ><Link to="/educacional" className="p-branco text-decoration-none"> voltar</Link></button>
            </div> 
            
        </div>
    )
}

export default OpcoesEducacional