import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Catalogo from "./Components/Catalogo/index.jsx"
import Cadastrarcarro from './Components/Cadastrarcarro/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Home from './Components/home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/> 
      <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/catalogo" element = {<Catalogo />}exact />
      <Route path = "/cadastro" element = {<Cadastrarcarro />}exact />
     
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
