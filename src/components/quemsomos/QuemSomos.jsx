import Banner from '../banner/Banner.jsx'
import MulherEspirrando from '../../assets/images/Imagem-mulher-espirrando-tela.jpeg'
import Resultadosparacomunidade from '../resultadosparacomunidade/resultadosparacomunidade.jsx'



function QuemSomos() {
return(
    <>
    <Banner imagesrc={MulherEspirrando} title={"Conheça a Limpay"}></Banner>
    <Resultadosparacomunidade></Resultadosparacomunidade>
    </>
)
}

export default QuemSomos