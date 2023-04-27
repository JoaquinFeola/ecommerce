import { ACTION_TYPES } from "./ActionsTypes";

export const ecommerceReducer = ( state = [], action = {} ) => {
    const findIndex =  state.findIndex((product) => product.id === action.payload.id);

    switch (action.type) {
        case ACTION_TYPES.addProduct:
            return (
                ( findIndex === -1 ) 
                    ? [ ...state, action.payload ]
                    : [...state]
            );
                
    
        default:
            break;
    }
}
