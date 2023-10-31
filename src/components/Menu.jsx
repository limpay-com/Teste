// import {BsFillEyeFill} from '../node_modules/react-icons/bs/index.esm'
import {BsFillEyeFill} from '../../node_modules/react-icons/bs/index.esm'
import './Menu.css'
// import logoMenu from "./assets/logoMenu.png"
import logoMenu from '../assets/logoMenu.png'

function Menu() {
  

  return (
    <>
      <div className='menu'>
        <img src={logoMenu} alt="" />


        <nav>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#educacional">Educacional</a></li>
        <li><a href="#quem-somos">Quem Somos</a></li>
        <li><a href="#suporte">Suporte</a></li>
        <li><a href="#inicio">Inicio</a></li>
        <BsFillEyeFill></BsFillEyeFill>
        </nav>

        <div className='profile'>
        </div>
      </div>
    </>
  )
}

export default Menu
