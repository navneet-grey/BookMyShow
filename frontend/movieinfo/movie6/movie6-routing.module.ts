import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie6Component } from './movie6.component';

const routes: Routes = [{ path: '', component: Movie6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie6RoutingModule { }
