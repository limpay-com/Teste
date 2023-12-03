import styles from "./Banner.css";
import Titulo from "../titulo/Titulo";
import MulherEspirrando from "../../assets/images/Imagem-mulher-espirrando-tela.jpeg";


const Banner = ({imagesrc , title}) => {
  return (
    <div className=" bg-primary banner d-flex ">
    <div className=" d-flex flex-column justify-content-center align-items-center w-50">
      <div className="m-1"><Titulo content={title}></Titulo></div>
      <div className="m-1 w-50">
        Nossos valores e missões, conheça os membros da equipe Limpay , sobre
        nossas cores e muito mais!
      </div>
      </div>
      <div className="container d-flex h-100 w-50 justify-content-center">
      <img
        alt=""
        src={imagesrc}
      />
      </div>
      
    </div>
  );
};

export default Banner;