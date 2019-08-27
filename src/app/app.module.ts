import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GalleryService} from './services/gallery.service';
import {HttpClientModule} from '@angular/common/http';
import { ViewImgComponent } from './components/view-img/view-img.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
