import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie9Component } from './movie9.component';

const routes: Routes = [{ path: '', component: Movie9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie9RoutingModule { }
