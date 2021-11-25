import React, { useEffect, useState } from 'react';
import Api from '../../api/api';

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // criacao do estado
  const [vaga, setVaga] = useState({});

  // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getVagaById();
  }, []);

  const getVagaById = async () => {
    // faz uma chamada para api para pegar o objeto de acordo com o id.
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    // atualizo o meu estado de acordo com o resultado.
    console.log(result);
    setVaga(result);
  };

  const handleFieldsChange = (event) => {
    // clono meu objeto do estado
    const campos = { ...vaga };
    // para cada input eu atualizo o seu respectivo valor no obj
    campos[event.target.name] = event.target.value;

    // atualizo o meu estado com esse novo objeto.
    setVaga(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // faco uma copia do estado com obj atualizado.
    const vagaObj = { ...vaga };
    // transforma o salario em inteiro.
    try {
      const response = await Api.fetchPut(vagaObj, _id);
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
              <h3>Edicao do jogo</h3>
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
                    value={vaga.nome}
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o Nome"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    value={vaga.lancamento}
                    className="form-control"
                    name="lancamento"
                    id="floatingsalario"
                    placeholder="Digite a data de lançamento"
                    onChange={handleFieldsChange}
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
                    value={vaga.desenvolvedora}
                    className="form-control"
                    name="desenvolvedora"
                    id="floatingInput"
                    placeholder="Digite a empresa desenvolvedora"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Desenvolvedora</label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      value={vaga.tipo}
                      className="form-control"
                      name="tipo"
                      id="floatingInput"
                      placeholder="Digite o tipo"
                      onChange={handleFieldsChange}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;
