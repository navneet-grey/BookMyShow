import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie8Component } from './movie8.component';

const routes: Routes = [{ path: '', component: Movie8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie8RoutingModule { }
