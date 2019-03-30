import { ProductCart } from 'src/app/models/productCart.model';
import * as reloadPage from './../actions/cart.actions';

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function reducer( state: ProductCart[] = [], action: reloadPage.All) {
   console.log(action.type, state);
    switch(action.type){
        case reloadPage.ADD_CART:
            console.log(action.payload);
            return [...state, action.payload];

        case reloadPage.REMOVE_CART:
            console.log(action.payload);
            state.splice(action.payload, 1);
        
        case reloadPage.RESET:
            return ProductCart;
        
        default:
            return state;

    }

}
