import Style from './Chat.css'
import Chatimg from '../../../assets/images/crescimentoTecnologico/Chat.svg'

function Chat() {
    return(
        <>
            <div className='d-flex justify-content-center align-items-center w-100'>
                <div className="align-self-center d-inline-block align-self-end c-valores f-azul p-2       ">
                    <h3 className="p-branco m-2 mx-4 mt-3 t-azul"> Chat</h3>
                    <p className='p-branco p-2 m-2'>
                    Terá um chat para os clientes(profissional e contratante) fazerem perguntas e respostas básicas, onde elas serão pré definidas, para facilitar o contato.
                    </p>
                </div>
                <div className=" d-inline-block my-4">
        
                    <img id='img-Chat' src={Chatimg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Chat