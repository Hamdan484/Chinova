import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Homepage from "./Homepage";
import Products from "./Products";
import ProductView from "./ProductView";
import Contact from "./Contact";
import About from "./About";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router basename="Chinova">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     
      <Footer />
    </Router>
  );
}

export default App;
