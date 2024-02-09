import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie10Component } from './movie10.component';

const routes: Routes = [{ path: '', component: Movie10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie10RoutingModule { }
