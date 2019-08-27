import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewImgComponent} from './components/view-img/view-img.component';

const routes: Routes = [
  { path: ':id', component: ViewImgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
