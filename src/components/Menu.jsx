

import {MdSupportAgent} from '../../node_modules/react-icons/md/index.esm'
import {MdPeopleAlt} from '../../node_modules/react-icons/md/index.esm'
import {AiOutlineBank} from '../../node_modules/react-icons/ai/index.esm'
import {BiHomeAlt2} from '../../node_modules/react-icons/bi/index.esm'
import {AiOutlineMenu} from '../../node_modules/react-icons/ai/index.esm'
import {BsFillEyeFill} from '../../node_modules/react-icons/bs/index.esm'
import './Menu.css'
import logoMenu from '../assets/logoMenu.png'

function showMenuBurger() {
  let menuBurger = document.querySelector('.mobile-menu')
  if (menuBurger.classList.contains('open')){
    menuBurger.classList.remove('open')
  } else {
    menuBurger.classList.add('open')
  }
}

function Menu() {
  
  return (
    <>
      <div className='menu'>
        <img src={logoMenu} alt="" />

        <nav className='menu-web'>
          <li className='nav-item'><a href="#inicio">Inicio</a></li>
          <li className='nav-item'><a href="#educacional">Educacional</a></li>
          <li className='nav-item'><a href="#quem-somos">Quem Somos</a></li>
          <li className='nav-item'><a href="#suporte">Suporte</a></li>
          <BsFillEyeFill></BsFillEyeFill>
        </nav>

        <div className='profile'>
        </div>

        <div className='mobile-menu-icon' onClick={showMenuBurger}>
          <AiOutlineMenu></AiOutlineMenu>
        </div>
      </div>
      
      <div className='mobile-menu'>
        <nav>
          <li className='nav-item'> <BiHomeAlt2></BiHomeAlt2><a href="#inicio">Inicio</a></li>
          <li className='nav-item'> <AiOutlineBank></AiOutlineBank><a href="#educacional">Educacional</a></li>
          <li className='nav-item'> <MdPeopleAlt></MdPeopleAlt><a href="#quem-somos">Quem Somos</a></li>
          <li className='nav-item'> <MdSupportAgent></MdSupportAgent><a href="#suporte">Suporte</a></li>
        </nav>
      </div>
    </>
  )
}

export default Menu
