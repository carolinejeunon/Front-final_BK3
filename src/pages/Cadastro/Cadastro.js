import React from 'react';
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value;
    const lancamento = evento.target.lancamento.value;
    const desenvolvedora = evento.target.desenvolvedora.value;
    const tipo = evento.target.tipo.value;

    const vaga = {
      nome,
      lancamento,
      desenvolvedora,
      tipo,
    };
    console.log(vaga);
    try {
      const response = await Api.fetchPost(vaga);
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Jogos</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o nome"
                  />
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="lancamento"
                    id="floatingsalario"
                    placeholder="Digite a data de lançamento"
                  />
                  <label htmlFor="floatingsalario">Lançamento</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="desenvolvedora"
                    id="floatingInput"
                    placeholder="Digite o nome da empresa desenvolvedora"
                  />
                  <label htmlFor="floatingInput">Desenvolvedora</label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="tipo"
                      id="floatingInput"
                      placeholder="Digite o tipo do jogo"
                    />
                    <label htmlFor="floatingInput">Tipo</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-success" type="submit">
                    Enviar
                  </button>
                  <button className="btn btn-outline-default">Voltar</button>
                </div>
              </div>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
