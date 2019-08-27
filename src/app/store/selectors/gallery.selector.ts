import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IGalleryState } from '../state/gallery.state';

const messageState = (state: IAppState) => state.data;

export const galleryData = createSelector(
  messageState,
  (state: IGalleryState) => state.gallery
);

export const selectedImage = createSelector(
  messageState,
  (state: IGalleryState) => state.selectedImage
);
