import { Products } from "../services/ProductsServices"

export const getProductsById = ( id ) => {
    const newId = parseInt(id);
    return Products.find((product) => product.id === newId);

};
