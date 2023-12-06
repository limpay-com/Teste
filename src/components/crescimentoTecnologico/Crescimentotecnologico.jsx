import IA from "./IA/IA"
import LimpezaEmGrupo from "./limpezaEmGrupo/limpezaEmGrupo"
import Chat from "./chat/Chat"

function Crescimentotecnologico() {
    return(
        <div className="p-2">
            <h3 className="d-flex justify-content-center t-azul">Crescimento Tecnológico</h3>
        <IA></IA>
        <LimpezaEmGrupo></LimpezaEmGrupo>
        <Chat></Chat>
        </div>
    )

}

export default Crescimentotecnologico