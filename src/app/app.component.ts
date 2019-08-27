import {Component, OnInit} from '@angular/core';
import {GalleryService} from './services/gallery.service';
import {IGallery} from './models/gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data: IGallery[];

  constructor(
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.galleryService.getGalleryData()
      .subscribe( (data: IGallery[]) => {
        this.data = data;
      });
  }

}
