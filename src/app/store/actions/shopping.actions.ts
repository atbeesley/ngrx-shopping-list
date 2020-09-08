import { ShoppingActionTypes } from './shopping.actions';
import { ShoppingItem } from './../models /shopping-item.model';
import { Action } from '@ngrx/store'
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item'
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success'
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure'
}

export class AddItemAction implements Action {
    readonly: string = ShoppingActionTypes.ADD_ITEM;

    constructor(public pyaload: ShoppingItem){}
    }
}

export type ShoppingAction = AddItemAction;