import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListarCarros } from "../../request";
import BasicExample from "../Cards";
import "./Catalogo.css";
import CardUsuario from "../Cards/usuario";
import { ListarUsuario } from "../../request/user";

export default function ListaUsuario() {
  const [listaUsuario, setListaUsuario] = useState([]);

  const request = async () => {
    await ListarUsuario().then((res) => setListaUsuario(res.data));
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="catalogo-list">
      <CardUsuario listaCliente={listaUsuario} />
    </div>
  );
}
