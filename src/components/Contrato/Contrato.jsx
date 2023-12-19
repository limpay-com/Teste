import './Contrato.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const Contrato = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const fetchDate = () => {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      setCurrentDate(formattedDate);
    };
    fetchDate();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  return (
    <div className="page-background">
      <Container>
        <Row>
        <Col className="d-flex justify-content-center">
    <div className="rectangle-div">
      <div className="contrato">
        <h2 className='poppins-font'>Contrato de Prestação de Serviços de Limpeza</h2>
        <p className='inter-font'>Este é um contrato válido a partir de {currentDate}.</p>

        <p className='inter-font'>O Contratante concorda em contratar os serviços da Profissional de Limpeza para realizar
          serviços de limpeza na residência/local do contratante e será prestado de forma regular durante o
          período acordado na plataforma.<br />
          Os serviços a serem prestados incluem, mas não estão limitados a: limpeza de pisos, aspiração
          de carpetes, limpeza de banheiros, limpeza de cozinha, remoção de pó, entre outros serviços
          de limpeza considerados necessários.<br />
          A Profissional de Limpeza concorda em executar os serviços acima mencionados de maneira
          profissional e diligente, fornecendo seus próprios materiais de limpeza, a menos que acordado
          de outra forma entre as partes.<br />
          Ambas as partes concordam que o pagamento pelos serviços prestados será feito através da carteira da LIMPAY.<br />
          Este contrato permanecerá em vigor até o término acordado
          ou até que uma das partes notifique a outra com antecedência mínima de 24 horas sobre a intenção de encerrar este contrato.
        </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <div className="frame-parent">
              <div className="aceitar-wrapper">
                <div className="aceitar" onClick={() => { handleShow(); }}>ACEITAR</div>
              </div>
              <div className="recusar-wrapper">
                <div className="recusar">Recusar</div>
              </div>
              <div className="imprimir-wrapper">
                <div className="imprimir">Imprimir</div>

                <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          Você aceitou o contrato e ele já está em sua agenda!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contrato;
