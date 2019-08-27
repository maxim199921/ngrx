import { RouterReducerState } from '@ngrx/router-store';

import { IGalleryState, initialGalleryState } from './gallery.state';

export interface IAppState {
  router?: RouterReducerState;
  data: IGalleryState;
}

export const initialAppState: IAppState = {
  data: initialGalleryState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
