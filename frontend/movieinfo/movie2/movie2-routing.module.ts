import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie2Component } from './movie2.component';

const routes: Routes = [{ path: '', component: Movie2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie2RoutingModule { }
