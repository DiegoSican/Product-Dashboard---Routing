import { useContext } from "react";
import { CartContext } from "../CarritoCompras";
import { Button, Container, ListGroup } from "react-bootstrap";

function Cart() {
  const { cart, añadircarro, disminuircarro, eliminarcarro } =
    useContext(CartContext);

  return (
    <Container className="mt-4">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-muted">El carrito está vacío</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.name}</h5>
                <p className="mb-0">Precio: Q{item.price}</p>
                <p className="mb-0">Cantidad: {item.quantity}</p>
              </div>
              <div>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => añadircarro(item)}
                >
                  +
                </Button>{" "}
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => disminuircarro(item.id)}
                >
                  -
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarcarro(item.id)}
                >
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}

export default Cart;
