import React from 'react';
import Carrossel from '../carrossel/Carrossel';
import CardGrid from '../cardGrid/CardGrid';
import { IoIosArrowForward } from "react-icons/io";
import Banner from '../banner/Banner'
import FiltroRápido from '../filtroRápido/FiltroRápido';
import './Inicio2.css'
import Home from "../../assets/images/inicio/home.svg"
import Book from "../../assets/images/inicio/book-open.svg"
import { Link } from 'react-router-dom';
import UpCycle from '../../assets/images/inicio/parceiros/upcycle.svg'
import Proa from '../../assets/images/inicio/parceiros/logo proa 1.svg'
import Lacoos from '../../assets/images/inicio/parceiros/logoLaçoos.jpeg'
import mulherLimpando from '../../assets/images/inicio/mulher-limpando-a-tela.png'

const Inicio2 = () => {

  function PopUpNone(){
    var popup = document.getElementById("popup")
    popup.style.display = "none";

  }

  return (

    <div className='fundo-inicial'>
      <Banner imagesrc={mulherLimpando} title={"Você em boas mãos!"} p={"Serviços especializados de limpeza para sua casa ou empresa"} />
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
                        <h5 class="modal-title" id="exampleModalLabel">Limpeza de casa recorrente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>
                          Limpeza de casa recorrente - Para quando você quer contar com sua casa sempre limpa e aconchegante. Selecione duas ou mais diárias que gostaria de contratar ou programe quantas diárias deseja no mês
                        </p>
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
                        <h5 class="modal-title" id="exampleModalLabel2">Limpeza interna</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>
                          Limpeza interna - Para quem sofre com a bagunça de dentro dos armários, essa limpeza é para você. Uma seleção especial que prioriza a limpeza interna dos móveis dos cômodos que você seleciona
                        </p>
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
                        <h5 class="modal-title" id="exampleModalLabel3">Limpeza completa</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>
                          Limpeza completa - Para quando você não sabe por onde começar, a limpeza completa é para você. Selecione os cômodos principais que deseja efetuar a limpeza e varreremos os seus problemas para você
                        </p>
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
        <h2 className='m-4 fw-bold' id='titulo-parceiros'>Parceiros que confiam em nós</h2>
        <div className='d-flex justify-content-center gap-4'>
          <div className='m-4'>
            <img className='imagem-lacoos' src={Lacoos} alt="" />
          </div>
          <div className='m-4'>
            <img className='w-100' src={Proa} alt="" />
          </div>
          <div className='m-4'>
            <img className='w-100' src={UpCycle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio2;
