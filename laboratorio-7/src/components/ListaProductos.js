import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, name: "Multímetro", price: 350 },
  { id: 2, name: "Jumpers", price: 30 },
  { id: 3, name: "Caja Multi-Usos", price: 100 },
  { id: 4, name: "Dip Switch 3 Polos", price: 5 },
  { id: 5, name: "Corta Cables", price: 60 },
  { id: 6, name: "Baterias AA", price: 15 },
];

function ListaProductos() {
  return (
    <Container className="mt-4">
      <h2>Lista de Productos</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-3">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>
                  <Link to={`/product/${product.id}`} className="text-primary">
                    {product.name}
                  </Link>
                </Card.Title>
                <Card.Text>Precio: Q{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaProductos;
