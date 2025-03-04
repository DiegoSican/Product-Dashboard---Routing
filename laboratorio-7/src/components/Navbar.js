import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CarritoCompras";
import "../styles.css";

function NavigationBar() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Panel de Productos
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="nav-link-custom">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-link-custom">
            Ver Carrito ({cart.length})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
