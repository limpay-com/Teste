import Banner from '../banner/Banner.jsx'
import MulherEspirrando from '../../assets/images/Imagem-mulher-espirrando-tela.jpeg'
import Resultadosparacomunidade from '../resultadosparacomunidade/resultadosparacomunidade.jsx'
import Valores from '../valores/Valores.jsx'
import Cores from '../cores/Cores.jsx'
import TimeLimpay from '../timeLimpay/TimeLimpay.jsx'
import Monetizacao from '../monetização/Monetizacao.jsx'
import Crescimentotecnologico from '../crescimentoTecnologico/CrescimentoTecnologico.jsx'
import Planos from '../planos/Planos.jsx'



function QuemSomos() {
return(
    <>
    <Banner imagesrc={MulherEspirrando} title={"Conheça a Limpay"} p="Nossos valores e missões, conheça os membros da equipe Limpay , sobre
        nossas cores e muito mais!"></Banner>
    <Resultadosparacomunidade></Resultadosparacomunidade>
    <Valores></Valores>
    <Cores></Cores>
    <TimeLimpay/>
    <Monetizacao/>
    <Crescimentotecnologico></Crescimentotecnologico>
    <Planos></Planos>
    </>
)
}

export default QuemSomos