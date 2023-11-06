import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListarCarros } from "../../request";
import BasicExample from "../Cards";
import './Catalogo.css'

export default function Catalogo() {
    const [listaCarro, setListaCaro] = useState([])

    const request = async () => {
        await ListarCarros().then((res) => setListaCaro(res.data))
    }

    useEffect(() => {
        request()
    }, [])

    return (
        <div className="catalogo-list">
            <BasicExample listaCarro={listaCarro} />
        </div>
    )
}