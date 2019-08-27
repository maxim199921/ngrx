import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from './store/state/app.state';
import {GetData} from './store/actions/gallery.actions';
import {galleryData} from './store/selectors/gallery.selector';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data$ = this.store.pipe(select(galleryData));

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetData());
  }

  showImg(id: number) {
    this.router.navigate(['', id]);
  }
}
