import './Menu.css';
import logoMenu from '../../assets/logo-pequena-azul.svg';
import PerfilMenu from '../../assets/images/menu/Group.svg';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";


function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <img
            src={logoMenu}
            alt=""
            width="150px"
            height="100px"
            style={{ margin: '0px', padding: '0px' }}
          />
          <button
            className="navbar-toggler m-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center text-center"
            id="navbarNav"
          >
            <div className="d-flex justify-content-center">

                <a
                className="d-block d-lg-none text-decoration-none  "
                href="#"
              >
                <div > <img src={PerfilMenu} alt="" /> olá, faça seu login
                  ou cadastre-se <IoIosArrowDown/>
                </div>
              </a>
              
            </div>
            <div className="d-none d-lg-block"></div>
            <ul className="navbar-nav">
              <li className="nav-item Limpay-teste mx-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-3"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Carteira
                </a>
                <ul
                  className="dropdown-menu text-center p-2"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="carteira"
                  style={{ backgroundColor: '#005dff' }}
                >
                  <li>
                    <a
                      className="dropdown-item "
                      href="#"
                      style={{ color: '#fff', backgroundColor: '#005dff' }}
                    >
                      Carteira
                    </a>
                  </li>
                  <li>
                    <hr
                      className="dropdown-divisor"
                      style={{ color: '#fff', border: 'solid 1px #fff' }}
                    />
                  </li>
                  <li className='d-flex'>
                    <a
                      className="dropdown-item fs-6"
                      href="#"
                      style={{ color: '#fff', backgroundColor: '#005dff' }}
                    >
                      Saldo em conta 
                      
                    </a>
                    <a
                      className="dropdown-item fs-6"
                      href="#"
                      style={{ color: '#fff', backgroundColor: '#005dff' }}
                    >
                       R$250,00
                      
                    </a>
                  </li>
                  <div className="d-flex justify-content-center ">
                      <a className='p-branco fw-light mt-2' href="#">Mais informações</a>
                  </div>
                </ul>
              </li>
              <li className="nav-item Limpay-teste mx-3">
                <a className="nav-link" href="#">
                  Educacional
                </a>
              </li>
              <li className="nav-item Limpay-teste mx-3">
                <Link className="nav-link" to="/QuemSomos">
                  Quem Somos
                </Link>
              </li>
              <li className="nav-item Limpay-teste mx-3">
                <Link
                  to="/suporte"
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          <a
            className="d-none d-lg-block text-decoration-none  "
            href="#"
          >
            <div className="d-none d-lg-block"> <img src={PerfilMenu} alt="" /> olá, faça seu login
ou cadastre-se <IoIosArrowDown/></div>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Menu;
