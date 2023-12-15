import Titulo from "../titulo/Titulo"
import CSS from './Resultadosparacomunidade.css'

function Resultadosparacomunidade() {
    return(
        <div className="container d-flex flex-column justify-content-center align-items-center rounded" id="c-resultados">
            <div>
            <h2 className="m-2 my-4">Resultados para a comunidade</h2>
                <div className="d-inline-block m-2">
                    <p className="p-1 p"> Com a Limpay, espera-se facilitar a contratação de profissionais de limpeza, sem que  precisem depender de indicações, visando também a segurança de todos os clientes, garantindo que o salário seja pago corretamente e o trabalho seja devidamente realizado. Além disso, nosso objetivo também é trazer uma maior independência na escolha de serviços.</p>
                    <p className="p-1 p">Esperamos agregar muito na vida dos profissionais, principalmente através do fazendo limpa, onde, os profissionais serão capazes de obter ainda mais conhecimento quanto à limpeza, podendo assim atualizar ainda mais seus curriculos, nosso objetivo é capacitá-los ainda mais, de modo que eles sejam mais valorizados e tenham mais oportunidades</p>
                </div>
            </div>
        </div>
    )
}

export default Resultadosparacomunidade