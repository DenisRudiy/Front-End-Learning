import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { countNode, countReducer, CountState } from './count/count.reducer';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
