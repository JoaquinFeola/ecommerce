import { useEffect, useReducer } from "react";
import { EcommerceContext } from "./";
import { ecommerceReducer } from "./ecommerceReducer";
import { ACTION_TYPES } from "./ActionsTypes";

const initProductsCart = () => {
  return (
    ( localStorage.getItem('PRODUCTS__ARR') )
      ? JSON.parse( localStorage.getItem('PRODUCTS__ARR') )
      : []
  )
};

export const EcommerceProvider = ({ children }) => {
  const [ ProductsCart, dispatchProductsCart ] = useReducer( ecommerceReducer,[], initProductsCart) 
  const onProductAddToCart = ( product = {} ) => {
    const action = {
      type: ACTION_TYPES.addProduct,
      payload: product
    };
    dispatchProductsCart(action);
  };
  
  useEffect(() => {
    localStorage.setItem('PRODUCTS__ARR', JSON.stringify(ProductsCart));
  }, [ProductsCart]);
  
  return (
    <EcommerceContext.Provider value={{
      ProductsCart,
      // methods
      onProductAddToCart,
    }}>
        { children }
    </EcommerceContext.Provider>
  )
}
