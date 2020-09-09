import { ShoppingActionTypes } from './../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingAction } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: "1",
        name: 'DietCoke'
    }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction){
    switch (action.type){
        case ShoppingActionTypes.ADD_ITEM:
            [...state, action.payload];
        default: 
            return state;
    }
}