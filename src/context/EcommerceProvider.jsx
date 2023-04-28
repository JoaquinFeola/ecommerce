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
  // products cart methods
  const onProductAddToCart = ( product = {} ) => {
    const action = {
      type: ACTION_TYPES.addProduct,
      payload: product,
    };
    dispatchProductsCart(action);
  };
  const onProductAddAmount = (product) => {
    const action = {
      type: ACTION_TYPES.addAmount,
      payload: product,
    };
    dispatchProductsCart(action)
  };
  const onProductSubstractAmount = (product) => {
    const action = {
      type: ACTION_TYPES.substractAmount,
      payload: product,
    };
    dispatchProductsCart(action);
  }

  const onProductRemove = (product = {}) => {
    const action = {
      type: ACTION_TYPES.deleteProduct,
      payload: product,
    };
    dispatchProductsCart(action)
  }
  // -----------------------------------------
  
  useEffect(() => {
    localStorage.setItem('PRODUCTS__ARR', JSON.stringify(ProductsCart));
  }, [ProductsCart]);
  
  return (
    <EcommerceContext.Provider value={{
      ProductsCart,
      // methods
      onProductAddToCart,
      onProductRemove,
      onProductAddAmount,
      onProductSubstractAmount,
    }}>
        { children }
    </EcommerceContext.Provider>
  )
}
