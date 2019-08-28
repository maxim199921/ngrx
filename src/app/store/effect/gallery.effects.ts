import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {IGallery} from '../../models/gallery';
import {EGaleryActions, GetData, GetDataSuccess, GetImage, GetImageSuccess} from '../actions/gallery.actions';
import {GalleryService} from '../../services/gallery.service';

@Injectable()
export class GalleryEffects {
  @Effect()
  getData$ = this.actions$.pipe(
    ofType<GetData>(EGaleryActions.GetData),
    switchMap(() => {
      return this.galleryService.getGalleryData();
    }),
    switchMap((data: IGallery[]) => {
      return of(new GetDataSuccess(data));
    })
  );

  @Effect()
  getImg$ = this.actions$.pipe(
    ofType<GetImage>(EGaleryActions.GetImage),
    map( action => +action.payload),
    switchMap(id =>
      this.galleryService.getGalleryData().pipe(
        map(data => {
          return data.find(el => el.id === id);
        }),
        switchMap( (selectedImg) => {
           return of(new GetImageSuccess(selectedImg));
        })
      )
    )
  );

  constructor(
    private galleryService: GalleryService,
    private actions$: Actions
  ) {}
}
