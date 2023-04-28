import { ProductsServices } from "../ecommerce/services/ProductsCartServices";
import { ACTION_TYPES } from "./ActionsTypes";

export const ecommerceReducer = ( state = [], action = {} ) => {
    const findIndex =  state.findIndex((product) => product.id === action.payload.id);


    switch (action.type) {
        case ACTION_TYPES.addProduct:
            return (
                ( findIndex === -1 ) 
                    ? [ ...state, {...action.payload } ]
                    : [...state]
            );
        case ACTION_TYPES.deleteProduct: 
            return state.filter((producto) => producto.id !== action.payload.id);
        case ACTION_TYPES.addAmount: {
            if ( findIndex !== -1 && state[findIndex].amount < action.payload.stock)
            {
                action.payload.amount ++;
                action.payload.price += ProductsServices.find((product) => product.id === action.payload.id).price;
                return [...state]
            }
            return [...state];
        }
        case ACTION_TYPES.substractAmount: {
            if ( findIndex !== -1 && state[findIndex].amount > 1)
            {
                action.payload.amount--;
                action.payload.price -= ProductsServices.find((product) => product.id === action.payload.id).price;
                return [...state];
            }
            return [...state];
        }

        default:
            break;
    }
}
