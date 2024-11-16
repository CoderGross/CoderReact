import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListDetail from './components/ItemListDetail/ItenListDetail';
import Clips from './components/Clips/Clips';
import Footer from './components/footer/Footer';
import CartSummary from './components/CartSummary/CartSummary';
import Swal from 'sweetalert2'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCartItems => {
      const existingProductIndex = prevCartItems.findIndex(item => item.id === product.id);
      
      if (existingProductIndex > -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return updatedCartItems;
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.map(item => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }).filter(item => item !== null);
      return updatedCartItems;
    });
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const checkout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: '¡Carrito vacío!',
        text: 'No puedes realizar una compra sin productos en el carrito.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#d33',
      });
    } else {
      Swal.fire({
        title: 'Compra realizada con éxito!',
        text: 'Tu compra ha sido procesada correctamente.',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#3085d6',
      });
      setCartItems([]); 
    }
  };

  return (
    <Router>
      <div className="deco">
        <NavBar cartItems={cartItems.length} onEmptyCart={emptyCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/shop" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/item-detail" element={<ItemListDetail addToCart={addToCart} />} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/historia" element={<h2>Sección de Historia</h2>} />
        </Routes>
        <CartSummary 
          cartItems={cartItems} 
          onEmptyCart={emptyCart} 
          onCheckout={checkout} 
          removeItem={removeItem} 
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
