import './TimeLimpayPerfil.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function TimeLimpayPerfil({fotosrc,descricao,nome}) {
    return(
        <div className="c-perfil d-flex flex-column justify-content-center align-items-center">
            <div> <img src={fotosrc} /></div>

            <div>
                <p className="m-2">
                    {nome}
                    <br />
                    {descricao}
                </p>
            </div>

            <div className='text-center'>
            <FaInstagram className='mx-1' />
            <FaLinkedin className='mx-1'/>
            <FaGithub className='mx-1'/>
            </div>
        </div>
    )
}

export default TimeLimpayPerfil