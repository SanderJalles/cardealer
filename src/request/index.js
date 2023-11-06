import axios from "axios"

export function ListarCarros() {
    return axios.get("http://localhost:8080/carros")
}

export function CriarCarros(data) {
    return axios.post("http://localhost:8080/carros/registrarcarro", data)
}

export function DeleteCarros(id) {
    return axios.delete(`http://localhost:8080/carros/deletecarro/${id}`)
}


