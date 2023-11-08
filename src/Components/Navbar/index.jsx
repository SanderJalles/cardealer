import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navegador() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="" >Carros</Navbar.Brand>
          <Nav className="me-auto centralizar">
            <Nav><Link className='home' to ="/">Home</Link></Nav>
            <Nav><Link className = 'cadastro' to = "/cadastro">cadastro</Link></Nav>
            <Nav><Link className = 'catalogo' to = "/catalogo">catalogo</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default Navegador;