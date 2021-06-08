 
import { createAction,props } from '@ngrx/store';

export const increase = createAction('increase counter');
export const decrease = createAction('decease counter');
export const reset = createAction('reset');
export const setCustom = createAction("setCustom",props<{val:number}>()); 