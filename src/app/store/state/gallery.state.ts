import {IGallery} from '../../models/gallery';

export interface IGalleryState {
  gallery: IGallery[];
  selectedImage: IGallery;
}

export const initialGalleryState: IGalleryState = {
  gallery: null,
  selectedImage: null
};
