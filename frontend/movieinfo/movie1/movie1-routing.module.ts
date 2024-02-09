import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie1Component } from './movie1.component';

const routes: Routes = [{ path: '', component: Movie1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie1RoutingModule { }
