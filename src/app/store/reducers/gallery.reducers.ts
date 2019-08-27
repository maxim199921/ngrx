import {EGaleryActions} from '../actions/gallery.actions';
import {GalleryActions} from '../actions/gallery.actions';
import {initialGalleryState, IGalleryState} from '../state/gallery.state';

export const galleryReducers = (
  state = initialGalleryState,
  action: GalleryActions
): IGalleryState => {
  switch (action.type) {
    case EGaleryActions.GetDataSuccess: {
      return {
        ...state,
        gallery: action.data
      };
    }
    case EGaleryActions.GetImageSuccess: {
      return {
        ...state,
        selectedImage: action.img
      };
    }
    default:
      return state;
  }
};
