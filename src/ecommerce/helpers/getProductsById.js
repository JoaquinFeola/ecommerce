import { ProductsServices } from "../services/ProductsCartServices";

export const getProductsById = ( id ) => {
    const newId = parseInt(id);
    return ProductsServices.find((product) => product.id === newId);

};
