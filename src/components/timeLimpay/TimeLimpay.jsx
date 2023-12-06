import Stephany from '../../assets/images/timeLimpay/Stephany.svg'
import Silvio from '../../assets/images/timeLimpay/Silvio.svg'
import Sabrina from '../../assets/images/timeLimpay/Sabrina.svg'
import Faberson from '../../assets/images/timeLimpay/Faberson.svg'
import Luiz from '../../assets/images/timeLimpay/Luiz.svg'
import Rebeca from '../../assets/images/timeLimpay/Rebeca.svg'
import Danilo from '../../assets/images/timeLimpay/Danilo.svg'
import Alexandre from '../../assets/images/timeLimpay/Alexandre.svg'
import TimeLimpayPerfil from '../timeLimpayPerfil/TimeLimpayPerfil.jsx'
import CSS from './TimeLimpay.css'

function TimeLimpay() {
    return(
        <div className=' bg-principal f-azul p-branco w-100 m-auto'  > 
        <div className=' d-flex flex-wrap d-flex m-auto justify-content-center align-items-center p-2' id='containertimelimpay'>
        <TimeLimpayPerfil fotosrc={Stephany} nome="Stephany Dias" descricao=" Product Owner e Full Stack"/>
        <TimeLimpayPerfil fotosrc={Silvio} nome="Silvio Gabriel" descricao=" Scrum Master e Full-Stack"/>
        <TimeLimpayPerfil fotosrc={Sabrina} nome="Sabrina Ramos" descricao=" Back-End e Banco de dados"/>
        <TimeLimpayPerfil fotosrc={Faberson} nome="Faberson Reis" descricao=" Front-End e Banco de dados"/>
        <TimeLimpayPerfil fotosrc={Luiz} nome="luiz Felipe" descricao=" Back-End, Banco de Dados e Financeiro"/>
        <TimeLimpayPerfil fotosrc={Rebeca} nome="Rebeca Oliveira" descricao="Financeiro e Front-End"/>
        <TimeLimpayPerfil fotosrc={Danilo} nome="Danilo Linguanote" descricao=" Back-End e Banco de Dados"/>
        <TimeLimpayPerfil fotosrc={Alexandre} nome="Alexandre Lemes" descricao="Back-End e Banco de Dados"/>
        </div>
        </div>
    )
}

export default TimeLimpay