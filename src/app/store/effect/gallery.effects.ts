import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';

import {IGallery} from '../../models/gallery';
import {EGaleryActions, GetData, GetDataSuccess, GetImage, GetImageSuccess} from '../actions/gallery.actions';
import {GalleryService} from '../../services/gallery.service';
import {select, Store} from '@ngrx/store';
import {galleryData} from '../selectors/gallery.selector';
import {IAppState} from '../state/app.state';

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
    map((action) => {
      return action.payload;
    }),
    withLatestFrom(this.store.pipe(select(galleryData))),
    switchMap( ([id, data]) => {
       const selectedImg = data.find(user => user.id === +id);
       return of(new GetImageSuccess(selectedImg));
    })
  );

  constructor(
    private galleryService: GalleryService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {
  }
}
