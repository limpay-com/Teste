import React from 'react';
import Carrossel from '../carrossel/Carrossel';
import CardGrid from '../cardGrid/CardGrid';
import { IoIosArrowForward } from "react-icons/io";
import Titulo from '../titulo/Titulo';
import CardImagem from '../cardImagem/CardImagem';
import AreaInterna from '../../assets/images/cardImagem/interna.png';
import aExterna from '../../assets/images/cardImagem/externa.png';
import Educacional from '../../assets/images/cardImagem/educacional.png';
import Banner from '../banner/Banner'
import MulherEspirrando from '../../assets/images/Imagem-mulher-espirrando-tela.jpeg';
import FiltroRápido from '../filtroRápido/FiltroRápido';
import './Inicio.css'
import Home from "../../assets/images/inicio/home.svg"
import Book from "../../assets/images/inicio/book-open.svg"
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='fundo-inicial'>
      <Banner imagesrc={MulherEspirrando} title={"Você em boas mãos!"} p={"Serviços especializados de limpeza para sua casa ou empresa"} />
      <div className="container ">
        {/* <div className="row">
          <div className="col-12">   
            <Carrossel />
          </div>
        </div> */}
        <FiltroRápido></FiltroRápido>
        <div className="row my-4">
          <div className="col-6 ">
            <h2 className="fs-2 fw-bold" >Profissionais em destaque</h2>
          </div>
          <div className="col-6 ">
            <h2 className="fs-6 text-end mt-4 "><a href="" className="c-texto-azul text-decoration-none fw-bold">Acessar todos <IoIosArrowForward></IoIosArrowForward> </a> </h2>
          </div>
        </div>
        <CardGrid />
        <div className="row my-4">
          <div className="col-6 ">
            <h2 className="fs-2 fw-bold" >Conheça nossos serviços</h2>
            <p>O que temos para fazer a sua casa brilhar </p>
          </div>

          <div className="col-6 ">
            <h2 className="fs-6 text-end mt-4 "><a href="" className="c-texto-azul text-decoration-none fw-bold">Acessar todos <IoIosArrowForward></IoIosArrowForward> </a> </h2>
          </div>

          <div className='d-flex justify-content-center flex-wrap'>
            <div className="card m-3 d-inline-block" style={{ width: 350 }}>
              <div class="card-body">
                <div className='bg-icone d-flex justify-content-center'>
                  <img style={{ width: 30 }} src={Home} />
                </div>
                <h5 class="card-title">Limpeza de casa recorrente</h5>
                <p class="card-text">Agende duas ou mais visitas  com uma de nossas profissionais de limpeza.</p>
                <a href="#" class="c-texto-azul fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Saiba mais <IoIosArrowForward></IoIosArrowForward></a>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="card m-3 d-inline-block" style={{ width: 350 }}>
              <div class="card-body">
                <div className='bg-icone d-flex justify-content-center'>
                  <img style={{ width: 30 }} src={Home} />
                </div>
                <h5 class="card-title"> Limpeza interna</h5>
                <p class="card-text">Limpeza na parte interna de móveis como geladeiras, fogões e guarda-roupa</p>
                <a href="#" class="c-texto-azul fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal2" >Saiba mais <IoIosArrowForward></IoIosArrowForward></a>

                
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">Modal title 2</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="card m-3 d-inline-block" style={{ width: 350 }}>
              <div class="card-body">
                <div className='bg-icone d-flex justify-content-center'>
                  <img style={{ width: 30 }} src={Home} />
                </div>
                <h5 class="card-title">Limpeza Completa</h5>
                <p class="card-text">Limpeza de dentro e fora da residência e limpeza dentro de móveis, desejados</p>
                <a href="#" class="c-texto-azul fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal3">Saiba mais <IoIosArrowForward></IoIosArrowForward></a>

                <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel3">Modal title 3</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>


          <div className="card m-auto" style={{ width: 1115 }}>
            <div class="card-body">
              <div className='bg-icone d-flex justify-content-center'>
                <img style={{ width: 30 }} src={Book} />
              </div>
              <h5 class="card-title">Educacional : Fazendo a limpa</h5>
              <p class="card-text"> Cursos especializados em limpeza, que fornecem conhecimentos práticos e teóricos. Os módulos disponíveis aprimoram habilidades desde técnicas avançadas de limpeza até gestão de produtos e equipamentos, com dicas valiosas para otimizar a eficiência profissional.</p>
              <Link to="/educacional" class="c-texto-azul fw-bold">Saiba mais <IoIosArrowForward></IoIosArrowForward></Link>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-6">
            <CardImagem imageSrc={AreaInterna} cardTitle={'Área Interna'} />
          </div>
          <div className="col-md-6">
            <CardImagem imageSrc={aExterna} cardTitle={'área externa'} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CardImagem imageSrc={Educacional} cardTitle={'Área Educacional'} />
          </div>
        </div> */}

      </div>

      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h2>Parceiros </h2>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Inicio;
