import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../state/app.state';
import {galleryReducers} from './gallery.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  data: galleryReducers,
};
