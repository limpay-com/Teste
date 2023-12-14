import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DadosBancarios.css';

class DadosBancarios extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: '',
        numeroConta: '',
        tipoConta: '',
        banco: '',
        cadastrarPix: false,
        tipoChavePix: '',
        chavePix: '',
        cadastradoComSucesso: false
      };
    }
  
    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
      };
  
      handleSubmit = (event) => {
        event.preventDefault();
      // Aqui você pode adicionar lógica para enviar os dados para o backend
      setTimeout(() => {
        this.setState({ cadastradoComSucesso: true });

        setTimeout(() => {
            this.setState({
              nome: '',
              numeroConta: '',
              tipoConta: '',
              banco: '',
              cadastrarPix: false,
              tipoChavePix: '',
              chavePix: '',
              cadastradoComSucesso: false
            });
          }, 3000);
        }, 2000);
      };
  
      render() {
        return (
          <div className="container">
            <h2>Cadastro de Dados Bancários</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input type="text" className="form-control" id="nome" name="nome" value={this.state.nome} onChange={this.handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="numeroConta" className="form-label">Número da Conta:</label>
              <input type="text" className="form-control" id="numeroConta" name="numeroConta" value={this.state.numeroConta} onChange={this.handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="tipoConta" className="form-label">Tipo de Conta:</label>
              <select className="form-select" id="tipoConta" name="tipoConta" value={this.state.tipoConta} onChange={this.handleChange}>
                <option value="">Selecione o tipo de conta</option>
                <option value="corrente">Corrente</option>
                <option value="poupanca">Poupança</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="banco" className="form-label">Banco:</label>
              <input type="text" className="form-control" id="banco" name="banco" value={this.state.banco} onChange={this.handleChange} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="cadastrarPix" name="cadastrarPix" checked={this.state.cadastrarPix} onChange={this.handleChange} />
              <label className="form-check-label" htmlFor="cadastrarPix">Cadastrar PIX</label>
            </div>
            {this.state.cadastrarPix && (
              <div className="mb-3">
                <label htmlFor="tipoChavePix" className="form-label">Tipo de Chave PIX:</label>
                <select className="form-select" id="tipoChavePix" name="tipoChavePix" value={this.state.tipoChavePix} onChange={this.handleChange}>
                  <option value="">Selecione o tipo de chave PIX</option>
                  <option value="cpf">CPF</option>
                  <option value="telefone">Telefone</option>
                  <option value="email">E-mail</option>
                  <option value="aleatoria">Chave Aleatória</option>
                </select>
                <div className="mb-3">
                <label htmlFor="chavePix" className="form-label">Chave PIX:</label>
                <input type="text" className="form-control" id="chavePix" name="chavePix" value={this.state.chavePix} onChange={this.handleChange} />
              </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </form>
          {this.state.cadastradoComSucesso && (
          <div className="popup">
            <div className="popup-content">
              <p>Cadastrado com sucesso!</p>
            </div>
          </div>
        )}
      </div>
      );
    }
  }
  
  export default DadosBancarios;