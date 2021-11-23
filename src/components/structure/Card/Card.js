import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const acao = props.data;
  return (
    <Link to={`/view/${acao._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ acao.nome }</h5>
          <span className="badge bg-primary">{ acao.lancamento }</span>
          <span className="badge bg-light text-dark"> { acao.desenvolvedora }</span>
          <span className="badge bg-light text-dark"> { acao.tipo }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
