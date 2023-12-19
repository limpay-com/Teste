// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './Cadastro02.css';

// function Cadastro02() {
//     return (
//         <Container fluid>
//             <div className="cadastro-02">
//                 <Row className="continue-seu-cadastro">
//                     <Col>
//                         <p>CONTINUE SEU CADASTRO</p>
//                         <Row className="ol-parabns-por-container">
//                             <Col>
//                                 <p className="ol">Olá, parabéns por iniciar sua jornada na LIMPAY! Para desbloquear todos os recursos incríveis da nossa plataforma precisamos de alguns detalhes extras no seu cadastro. Não se preocupe, é rápido e fácil.</p>
//                             </Col>
//                         </Row>
//                         <span>Dados pessoais</span>
//                         <Form>
//                             <Form.Group controlId="formDateOfBirth">
//                                 <Form.Label>Data de Nascimento</Form.Label>
//                                 <Form.Control type="date" placeholder="DD/MM/AAAA" />
//                             </Form.Group>
//                             <Form.Group controlId="formCPF">
//                                 <Form.Label>CPF</Form.Label>
//                                 <Form.Control type="text" placeholder="Insira seu CPF" />
//                             </Form.Group>
//                             <Form.Group controlId="formPhoneNumber">
//                                 <Form.Label>Número de Celular</Form.Label>
//                                 <Form.Control type="tel" placeholder="11 99999-9999" />
//                             </Form.Group>
//                             <Form.Group controlId="formCheckboxContratante">
//                                 <Form.Check type="checkbox" label="Contratante" />
//                             </Form.Group>
//                             <Form.Group controlId="formCheckboxProfissional">
//                                 <Form.Check type="checkbox" label="Profissional de Limpeza" />
//                             </Form.Group>
//                         </Form>
//                     </Col>
//                 </Row>
//                 <Row className="endereço">
//                     <Col>
//                         <span>Endereço</span>
//                         <Form>
//                             <Form.Group controlId="formCEP">
//                                 <Form.Label>CEP</Form.Label>
//                                 <Form.Control type="text" placeholder="Insira seu CEP" />
//                             </Form.Group>
//                             <Form.Group controlId="formEstado">
//                                 <Form.Label>Estado</Form.Label>
//                                 <Form.Control type="text" placeholder="Insira seu estado" />
//                             </Form.Group>
//                             <Form.Group controlId="formCidade">
//                                 <Form.Label>Cidade</Form.Label>
//                                 <Form.Control type="text" placeholder="Insira sua cidade" />
//                             </Form.Group>
//                             <Form.Group controlId="formNumeroCasa">
//                                 <Form.Label>Número da Casa</Form.Label>
//                                 <Form.Control type="text" placeholder="Número" />
//                             </Form.Group>
//                             <Form.Group controlId="formBairro">
//                                 <Form.Label>Bairro</Form.Label>
//                                 <Form.Control type="text" placeholder="Insira seu bairro" />
//                             </Form.Group>
//                             <Form.Group controlId="formComplemento">
//                                 <Form.Label>Complemento</Form.Label>
//                                 <Form.Control type="text" placeholder="Insira complemento (opcional)" />
//                             </Form.Group>
//                         </Form>
//                     </Col>
//                 </Row>
//                 <Row className="conta-bancária">
//                     <Col>
//                         <span>Conta bancária</span>
//                         <Form>
//                             <Form.Group controlId="formChavePix">
//                                 <Form.Label>Chave Pix</Form.Label>
//                                 <Form.Control type="text" placeholder="Digite a chave Pix" />
//                             </Form.Group>
//                             <Button variant="primary" type="submit">
//                                 Próxima etapa
//                             </Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </div>
//         </Container>
//     );
// }

// export default Cadastro02;

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Cadastro02.css';
import { Link } from 'react-router-dom';

function Cadastro02() {
    return (
        <Container fluid>
            <div className="cadastro-02">
                <Row className="continue-seu-cadastro">
                    <Col>
                        <p>CONTINUE SEU CADASTRO</p>
                        <Row className="ol-parabns-por-container">
                            <Col>
                                <p className="ol">Olá, parabéns por iniciar sua jornada na LIMPAY! Para desbloquear todos os recursos incríveis da nossa plataforma precisamos de alguns detalhes extras no seu cadastro. Não se preocupe, é rápido e fácil.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <span>Dados pessoais</span>
                                <Form.Group controlId="formDateOfBirth">
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control type="date" placeholder="DD/MM/AAAA" />
                                </Form.Group>
                                <Form.Group controlId="formCPF">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control type="text" placeholder="Insira seu CPF" />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <span>&nbsp;</span>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Número de Celular</Form.Label>
                                    <Form.Control type="tel" placeholder="11 99999-9999" />
                                </Form.Group>
                                <Form.Group controlId="formCheckboxContratante">
                                    <Form.Check type="checkbox" label="Contratante" />
                                </Form.Group>
                                <Form.Group controlId="formCheckboxProfissional">
                                <Form.Check type="checkbox" label="Profissional de Limpeza" />
                            </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="endereço">
                    <Col>
                        <span>Endereço</span>
                        <Row>
                            <Col sm={4}>
                                <Form.Group controlId="formCEP">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" placeholder="Insira seu CEP" />
                                </Form.Group>
                                <Form.Group controlId="formEstado">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" placeholder="Insira seu estado" />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group controlId="formCidade">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="text" placeholder="Insira sua cidade" />
                                </Form.Group>
                                <Form.Group controlId="formNumeroCasa">
                                    <Form.Label>Número da Casa</Form.Label>
                                    <Form.Control type="text" placeholder="Número" />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group controlId="formBairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" placeholder="Insira seu bairro" />
                                </Form.Group>
                                <Form.Group controlId="formComplemento">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control type="text" placeholder="Insira complemento (opcional)" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="conta-bancária">
                    <Col>
                        <span>Conta bancária</span>
                        <Form.Group controlId="formChavePix">
                            <Form.Label>Chave Pix</Form.Label>
                            <Form.Control type="text" placeholder="Digite a chave Pix" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            <Link  to="/inicio" className='p-branco'>Próxima etapa</Link>
                            </Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Cadastro02;
