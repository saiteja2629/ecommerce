import React from "react";
import HomePage from "./HomePage";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { paymentTOPay } from "../redux/ProductSlice";

const Orders = () => {
  const dispatch = useDispatch();

  const ordersData = useSelector((state) => state.ordersData);
  const paymentLink = (id) => {
    dispatch(paymentTOPay(id));
  };

  return (
    <>
      <HomePage />

      <ul>
        {ordersData.map((each) => (
          <li className="producs-item" key={each.id}>
            <img
              className="product-image"
              src={each.image}
              alt={each.title}
            ></img>
            <p>{each.category}</p>
            <p>{each.title} </p>
            <p>${each.price}</p>
            <p>Rating {each.rate}</p>
            <Link className="payment" to="/payments" onClick={() => paymentLink(each.id)}>
              Proceed To Payment
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Orders;
