import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CarritoCompras";
import { Card, Button, Container, Alert } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Multímetro",
    price: 350,
    description: "Sirve para medir corriente, voltaje, etc.",
  },
  {
    id: 2,
    name: "Jumpers",
    price: 30,
    description: "Sirven para crear conexiones o puentes",
  },
  {
    id: 3,
    name: "Caja Multi-Usos",
    price: 100,
    description: "Separa los integrados de forma ordenada",
  },
  {
    id: 4,
    name: "Dip Switch 3 Polos",
    price: 5,
    description: "Interruptor de 3 entradas",
  },
  { id: 5, name: "Corta Cables", price: 60, description: "Corta cable UTP" },
  {
    id: 6,
    name: "Baterías AA",
    price: 15,
    description: "Baterías de 3 Voltios",
  },
];

function DetallesProductos() {
  const { id } = useParams();
  const { añadircarro } = useContext(CartContext);
  const product = products.find((p) => p.id === Number(id));

  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    añadircarro(product);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="fw-bold">Precio: Q{product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>

          {showSuccess && (
            <Alert variant="success" className="mt-2">
              ¡Se añadió al Carrito! ✅
            </Alert>
          )}

          <Button variant="primary" className="me-2" onClick={handleAddToCart}>
            Añadir al Carrito
          </Button>

          <Link to="/">
            <Button variant="danger">Regresar a los Productos</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetallesProductos;
