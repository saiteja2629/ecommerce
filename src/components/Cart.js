import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./HomePage";
import {addItemToOrders, removeItemFromCart} from '../redux/ProductSlice'

const Cart = () => {
  const dispatch = useDispatch();

  const cartsData = useSelector((state) => state.cartData);
  const moveToOrder=(id)=>{
dispatch(addItemToOrders(id))
  }
const removeItem=(id)=>{
dispatch(removeItemFromCart(id))
}
  return (
    <>
      <HomePage />
      {
        cartsData.length< 0 ? <p>No items in cart</p> :
        <ul className="products-container">
        {cartsData.map((each) => (
          <li className="cart-item" key={each.id}>
            <img
              className="product-image"
              src={each.image}
              alt={each.title}
            ></img>
            <p>{each.category}</p>
            <p>{each.title} </p>
            <p>${each.price}</p>
            <p>Rating {each.rate}</p>
            <button className="move-to-order" onClick={() => moveToOrder(each.id)}>
              Move to order
            </button>
            <button
              className="remove-item"
              onClick={() => removeItem(each.id)}
            > Remove Item</button>
          </li>
        ))}
      </ul>
      }
    
    </>
  );
};

export default Cart;
