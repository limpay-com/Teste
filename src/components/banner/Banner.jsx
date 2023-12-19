import styles from "./Banner.css";
import Titulo from "../titulo/Titulo";
import MulherEspirrando from "../../assets/images/Imagem-mulher-espirrando-tela.jpeg";


const Banner = ({ imagesrc, title, p }) => {
  return (
    <div className=" bg-primary banner d-flex w-100">
      <div className="d-flex flex-column justify-content-center align-items-center w-50" id="c-titulo">
        <div className="m-3"><Titulo content={title}></Titulo></div>
        <div className="m-1 w-50">
          {p}
        </div>
      </div>
      <div className="d-flex justify-content-center " id="c-img">
        <img
          alt=""
          src={imagesrc}
        />
      </div>

    </div>
  );
};

export default Banner;