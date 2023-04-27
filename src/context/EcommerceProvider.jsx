import { useReducer } from "react";
import { EcommerceContext } from "./";
import { ecommerceReducer } from "./ecommerceReducer";

export const EcommerceProvider = ({ children }) => {
  const [ ProductsCart, dispatchProductsCart ] = useReducer( ecommerceReducer,[])
  return (
    <EcommerceContext.Provider value={{
      ProductsCart,
    }}>
        { children }
    </EcommerceContext.Provider>
  )
}
