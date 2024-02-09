import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie11Component } from './movie11.component';

const routes: Routes = [{ path: '', component: Movie11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Movie11RoutingModule { }
