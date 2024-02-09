import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie4Component } from './movie4.component';

const routes: Routes = [{ path: '', component: Movie4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie4RoutingModule { }
