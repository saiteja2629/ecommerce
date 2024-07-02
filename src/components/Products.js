import React, { useEffect } from "react";
import HomePage from "./HomePage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../redux/ProductSlice";
import {addItemToCart} from "../redux/ProductSlice"
import ProductItem from "./ProductItem";

export const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);
  
  const productsData = useSelector((state) => state.productsData);

  const addToCartBtn = (id) => {
    dispatch(addItemToCart(id));
  };

  const addItemToWishList=(id)=>{
    dispatch(addItemToWishList(id))
  }

  return (
    <>
      <HomePage />
      <ul className="products-container">
        {productsData?.map((each) => (
          <ProductItem key={each.id} each={each} addToCart={addToCartBtn} addtowhistlist={addItemToWishList} />
        ))}
      </ul>
    </>
  );
};
