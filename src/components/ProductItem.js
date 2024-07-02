import React from "react";


 const ProductItem = ({ each, addToCart,addtowhistlist }) => {
  const { id, title, image, category, price, rating } = each;
  const { rate } = rating;

  return (
    <li className="producs-item">
      <img className="product-image" src={image} alt={title}></img>
      <p>{category}</p>
      <p>{title} </p> 
      <p>${price}</p>
      <p>Rating {rate}</p>
      <button className="add-cart-button" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
      <button className="add-whistlist-button" onClick={() => addtowhistlist(id)}>
        Add to whistlist
      </button>
    </li>
  );
};

export default ProductItem;
