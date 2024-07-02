import React, { Routes, Route } from "react-router-dom";
import "./App.css";
import {Products} from './components/Products'

import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="app-container">
      <Routes>
      <Route exact path="/" element={<Products />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Orders" element={<Orders />} />
        <Route exact path="/payments" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
