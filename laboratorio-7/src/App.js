import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListaProductos from "./components/ListaProductos";
import DetallesProductos from "./components/DetallesProductos";
import Carrito from "./components/Carrito";
import { CartProvider } from "./CarritoCompras";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/product/:id" element={<DetallesProductos />} />
          <Route path="/cart" element={<Carrito />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
