import Banner from '../banner/Banner.jsx'
import MulherEspirrando from '../../assets/images/Imagem-mulher-espirrando-tela.jpeg'
import Resultadosparacomunidade from '../resultadosparacomunidade/resultadosparacomunidade.jsx'
import Valores from '../valores/Valores.jsx'



function QuemSomos() {
return(
    <>
    <Banner imagesrc={MulherEspirrando} title={"Conheça a Limpay"}></Banner>
    <Resultadosparacomunidade></Resultadosparacomunidade>
    <Valores></Valores>
    </>
)
}

export default QuemSomos