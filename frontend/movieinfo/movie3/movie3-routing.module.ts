import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie3Component } from './movie3.component';

const routes: Routes = [{ path: '', component: Movie3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie3RoutingModule { }
