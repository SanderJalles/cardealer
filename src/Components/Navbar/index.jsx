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
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='home' to ="/">Home</Link></Nav.Link>
            <Nav.Link><Link className = 'cadastro' to = "/cadastro">cadastro</Link></Nav.Link>
            <Nav.Link><Link className = 'catalogo' to = "/catalogo">catalogo</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default Navegador;