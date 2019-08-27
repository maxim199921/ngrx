import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGallery} from '../models/gallery';

@Injectable({providedIn: 'root'})
export class GalleryService {
  galleryUrl = `${environment.apiUrl}gallery.json`;

  constructor(
    private http: HttpClient
  ) {}

  getGalleryData(): Observable<IGallery[]> {
    return this.http.get<IGallery[]>(this.galleryUrl);
  }
}
