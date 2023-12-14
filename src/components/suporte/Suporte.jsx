import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import suporteImage from '../../assets/imagemsuporte.svg'
import './Suporte.css';

const Suporte = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowForm(true); // Fechar o formulário ao fechar o modal
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container mt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
 <div className="row align-items-center">
        <div className="col-md-6">
        <h1 className="poppins-font">Suporte</h1><br></br>
        <p className="inter-font">
         Está com problemas? Fale conosco que te ajudamos a resolver!
        </p><br></br>
          <button className="btn btn-primary btn-contact" onClick={toggleModal}>
            Contate-nos
          </button>
        </div>
        <div className="col-md-6">
          <img src={suporteImage} alt="Imagem de suporte" className="img-fluid" />
        </div>
      </div>

      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>


        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={toggleModal}></button>
            </div>
            <div className="modal-body">
              {showForm ? (
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome completo</label>
                    <input type="text" className="form-control" id="name" placeholder="Insira seu nome completo" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="Insira seu e-mail" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="numero" className="form-label">Número do Celular</label>
                    <input type="number" className="form-control" id="numero" placeholder="(11) 9999-9999" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensagem:</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Escreva sua dúvida ou dificuldade"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
              ) : (
                <div>
                  <p>Clique no botão abaixo para preencher o formulário.</p>
                  <button className="btn btn-primary" onClick={toggleForm}>Mostrar Formulário</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suporte;

