import {AiOutlineMenu} from '../../node_modules/react-icons/ai/index.esm'
import './MenuBurger.css'



function MenuBurger() {
    return (
        <nav className='mobile-menu'>
            <AiOutlineMenu></AiOutlineMenu>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#educacional">Educacional</a></li>
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#suporte">Suporte</a></li>
            <li><a href="#inicio">Inicio</a></li>
        </nav>
    )
}

export default MenuBurger
