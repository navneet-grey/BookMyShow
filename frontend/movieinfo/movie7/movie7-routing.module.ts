import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie7Component } from './movie7.component';

const routes: Routes = [{ path: '', component: Movie7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie7RoutingModule { }
