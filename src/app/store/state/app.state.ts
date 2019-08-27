import { RouterReducerState } from '@ngrx/router-store';

import { IGalleryState, initialGalleryState } from './gallery.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IGalleryState;
}

export const initialAppState: IAppState = {
  users: initialGalleryState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
