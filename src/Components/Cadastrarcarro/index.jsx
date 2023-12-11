import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CriarCarros } from "../../request";
import { useNavigate } from "react-router-dom";

export default function Cadastrarcarro() {

  const [name, setName] = useState('')
  const [preco, setPreco] = useState(0)
  const navigate = useNavigate() 


  const handleButtonClick = async () => {
    if (name && preco) {
      await CriarCarros({
        name: name,
        preco: preco
      }).then(() => navigate('/catalogo'))
    }
  }

  return (
    <div className="formCarro">
      <h2>Cadastro de carros</h2>
      <input type="text" placeholder="nome" onChange={e => setName(e.target.value)} />
      <br></br>
      <input type="number" placeholder="preço" onChange={e => setPreco(e.target.value)} />
      <button onClick={() => handleButtonClick()}>Criar</button>
    </div>
  )
}
