import React from "react";
import './footer.css';
import logoFooter from "../../assets/images/logo-branca.svg";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div id="divLogoFooter" className="sb__footer-links_div">
                        <img src= {logoFooter} alt="" />
                        </div>

                    {/* sobre a limpay */}
                    <div className="sb__footer-links_div">
                        <h4>Sobre a Limpay</h4>
                        <a href="/quemsomos">
                            <p>Quem somos</p>
                        </a>
                        <a href="/missao-visao-e-valores">
                            <p>Missão, Visão e Valores</p>
                        </a>
                        <a href="/termos">
                            <p>Termos de Serviço</p>
                        </a>
                        <a href="/privacidade">
                            <p>Política de Privacidade</p>
                        </a>
                    </div>

                    {/* serviços */}
                    <div className="sb__footer-links_div">
                        <h4>Serviços</h4>
                        <a href="/contratacao">
                            <p>Contratação</p>
                        </a>
                        <a href="/perfil">
                            <p>Perfil</p>
                        </a>
                        <a href="/carteira">
                            <p>Carteira</p>
                        </a>
                        <a href="/educacional">
                            <p>Educacional</p>
                        </a>
                    </div>

                    {/* suporte */}
                    <div className="sb__footer-links_div">
                        <h4>Suporte</h4>
                        <a href="/tutorial">
                            <p>Tutorial</p>
                        </a>
                        <a href="/ajuda">
                            <p>Centro de Ajuda</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Siga as nossas redes sociais:</h4>
                        <div className="socialmedia">
                            <p><IoLogoGithub /></p>
                            <p><FaFacebook /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                            <p><FaYoutube /></p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()} Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;