import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
import { ProductCart } from 'src/app/models/productCart.model';

export const ADD_CART = '[ADD_CART] add';
export const REMOVE_CART = '[REMOVE_CART] remove';
export const RESET = '[RESET] reset';

export class AddCart implements Action {
   readonly type = ADD_CART;
   constructor(public payload: ProductCart) {}
}

export class RemoveCart implements Action {
   readonly type = REMOVE_CART;
   constructor(public payload: number) {}
}

export class Reset implements Action{
    readonly type = RESET
}

export type All = AddCart | RemoveCart | Reset;