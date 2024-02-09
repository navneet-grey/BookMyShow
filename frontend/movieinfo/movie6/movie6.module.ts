import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie6RoutingModule } from './movie6-routing.module';
import { Movie6Component } from './movie6.component';


@NgModule({
  declarations: [
    Movie6Component
  ],
  imports: [
    CommonModule,
    Movie6RoutingModule
  ]
})
export class Movie6Module { }
