import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import CartPage from './pages/CartPage';
import './styles/styles.css'
import alov from './assets/alov.jpeg'
import basil from './assets/basil.webp'
import rose from './assets/rose.jpeg'
import orchid from './assets/orchid.jpg'
import lavender from './assets/lavender.jpg'
import fern from './assets/fern.jpg'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Lavender', description: 'Aromatic plant', price: 10.0, image: lavender, category: 'Aromatic' },
    { id: 2, name: 'Aloe Vera', description: 'Medicinal plant', price: 15.0, image: alov, category: 'Medicinal' },
    { id: 3, name: 'Rosemary', description: 'Aromatic plant', price: 8.0, image: rose, category: 'Aromatic' },
    { id: 4, name: 'Basil', description: 'Medicinal plant', price: 12.0, image: basil, category: 'Medicinal' },
    { id: 5, name: 'Orchid', description: 'Ornamental plant', price: 20.0, image: orchid, category: 'Ornamental' },
    { id: 6, name: 'Fern', description: 'Ornamental plant', price: 18.0, image: fern, category: 'Ornamental' },
  ];

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (product, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing products={products} addToCart={addToCart} cartItems={cartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;