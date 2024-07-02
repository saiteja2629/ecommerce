import React from "react";
import { useSelector } from "react-redux";
//import {paymentData} from "react-redux";
import HomePage from "./HomePage";


const Payment = () => {
    const paymentToItem= useSelector(state=>state.paymentData)
    console.log(paymentToItem)
  return (

    <>
    <HomePage/>
    {
        paymentToItem.map((each)=>(<p key={each.id}> Total amount to pay {each.price}</p>))
    }
    
      <label>Card Number</label>
      <input type="number"></input>
      <label>Card Holder Name</label>
      <input type="text"></input>
      <label>Expiry Date</label>
      <input type="date"></input>
    </>
  );
};

export default Payment;
