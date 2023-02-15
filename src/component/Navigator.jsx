import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigator = ()=>{
    return(
        
              <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Challenge VII</Navbar.Brand>
          <Nav className="me-auto">
             <Link to={"/paginaPrincipal"} className="text-white m-3">Pagina Principal</Link>
             <Link to={"/portafolio"} className="text-white m-3">Portafolio</Link>
             <Link to={"/usuarios"} className="text-white m-3">Usuarios</Link>
             <Link to={"/administracion"} className="text-white m-3">Administracion</Link>
             <Link to={"/informacionGeneral"} className="text-white m-3">Informacion General</Link>
           
          </Nav>
        </Container>
      </Navbar>
        
    )
}

export default Navigator;
