import React from 'react';
import Carrossel from '../carrossel/Carrossel';
import CardGrid from '../cardGrid/CardGrid';
import Titulo from '../titulo/Titulo';
import CardImagem from '../cardImagem/CardImagem';
import AreaInterna from '../../assets/images/cardImagem/interna.png';
import aExterna from '../../assets/images/cardImagem/externa.png';
import Educacional from '../../assets/images/cardImagem/educacional.png';
import Banner from '../banner/Banner'
import MulherEspirrando from '../../assets/images/Imagem-mulher-espirrando-tela.jpeg';
import FiltroRápido from '../filtroRápido/FiltroRápido';

const Inicio = () => {
  return (
    <div>
      <Banner imagesrc={MulherEspirrando} title={"Você em boas mãos!"} p={"Serviços especializados de limpeza para sua casa ou empresa"}/>
      <div className="container">
        {/* <div className="row">
          <div className="col-12">   
            <Carrossel />
          </div>
        </div> */}
        <FiltroRápido></FiltroRápido>
        <div className="row">
          <div className="col-6 ">
            <Titulo content={'Perfis em destaque'} />
          </div>
          <div className="col-6 ">
            <h2 className="fs-3 text-xl-end mt-4">encontre profissionais</h2>
          </div>
        </div>
        <CardGrid />
        <div className="row">
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
        </div>
      </div>
    </div>
  );
};

export default Inicio;
