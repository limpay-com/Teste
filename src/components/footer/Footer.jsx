import './Footer.css'
import Logo from '../../assets/logo-grande-branca.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return(
      <div className="container-fluid pd-3 texto-principal cor-fundo py-3">
        <div className="container-linha text-center my-2"></div>
        <div className='row justify-content-around text-md-start'>
          <div className="col-md-2 text-center d-flex align-items-center">
            <a href="/"><img className='logotipo' src={Logo} alt="Imagem do logo da plataforma Limpay de cor branca"/></a>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li className='titulo my-2'>Sobre a Limpay</li>
              <li><a href="/quemSomos" className='link-footer links'>Quem somos</a></li>
              <li><a href="/quemSomos" className='link-footer links'>Missão, visão e valores</a></li>
              <li><a href="#" className='link-footer links'>Termos de serviço</a></li>
              <li><a href="#" className='link-footer links'>Política de privacidade</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li className='titulo my-2'>Serviços</li>
              <li><a href="" className='link-footer links'>Contratação</a></li>
              <li><a href="" className='link-footer links'>Perfil</a></li>
              <li><a href="#" className='link-footer links'>Carteira</a></li>
              <li><a href="#" className='link-footer links'>Educacional</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li className='titulo my-2'>Central de ajuda</li>
              <li><a href="/Suporte" className='link-footer links'>Suporte</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <li className='list-unstyled titulo my-2 mb-3'>Siga as nossas redes sociais:</li>
            <ul className="list-unstyled d-flex  justify-content-md-start">
              <li className="mx-2"><a href="https://www.linkedin.com/company/limpay/"><i className="bi bi-linkedin branco"></i></a></li>
              <li className="mx-2"><a href="https://github.com/limpay-com"><i className='bi bi-github branco'></i></a></li>
              <li className="mx-2"><a href="https://www.instagram.com/limp_ay/"><i className='bi bi-instagram branco'></i></a></li>
              <li className="mx-2"><a href="https://www.tiktok.com/@limpay_?is_from_webapp=1&sender_device=pc"><i className='bi bi-tiktok branco'></i></a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer
