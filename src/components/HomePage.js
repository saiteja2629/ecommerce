import React, { useState } from "react";


import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const storeSearch = (e) => {
    setSearchProduct(e.target.value);
  };

  

  return (
    <div className="home-container">
      <ul className="nav-lists">
        <li className="logo">CHERRY MART</li>
        <li>
          <input type="text" value={searchProduct} onChange={storeSearch} />
          <button> Search</button>
        </li>
        <li>
        <Link  className="link-home"to="/">Home</Link>
        </li>
        <li>
          <Link className="link-cart" to="/Cart">Cart</Link>
        </li>
        <li>
        <Link  className="link-order" to="/Orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
};


export default HomePage;
