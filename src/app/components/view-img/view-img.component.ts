import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {GetImage} from '../../store/actions/gallery.actions';
import {selectedImage} from '../../store/selectors/gallery.selector';

@Component({
  selector: 'app-view-img',
  templateUrl: './view-img.component.html',
  styleUrls: ['./view-img.component.scss']
})
export class ViewImgComponent implements OnInit {

  public photo$ = this.store.pipe(select(selectedImage));

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
        this.store.dispatch(new GetImage(+params.get('id')));
      });
  }

}
