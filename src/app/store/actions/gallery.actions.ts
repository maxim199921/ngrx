import {IGallery} from '../../models/gallery';
import {Action} from '@ngrx/store';

export enum EGaleryActions {
  GetData = '[getData] get all photo',
  GetImage = '[GetImage] get one photo',
  GetDataSuccess = '[getDataSuccess] get all photo successful',
  GetImageSuccess = '[GetImageSuccess] get one photo successful',
}

export class GetData implements Action {
  public readonly type = EGaleryActions.GetData;
}

export class GetDataSuccess implements Action {
  public readonly type = EGaleryActions.GetDataSuccess;
  constructor(public data: IGallery[]) {}
}

export class GetImage implements Action {
  public readonly type = EGaleryActions.GetImage;
  constructor(public payload: number) {}
}

export class GetImageSuccess implements Action {
  public readonly type = EGaleryActions.GetImageSuccess;
  constructor(public img: IGallery) {}
}

export type GalleryActions = GetData | GetDataSuccess | GetImageSuccess | GetImage;
