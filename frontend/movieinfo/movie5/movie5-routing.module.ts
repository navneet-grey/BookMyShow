import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie5Component } from './movie5.component';

const routes: Routes = [{ path: '', component: Movie5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie5RoutingModule { }
