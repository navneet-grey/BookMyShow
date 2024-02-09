import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie2RoutingModule } from './movie2-routing.module';
import { Movie2Component } from './movie2.component';


@NgModule({
  declarations: [
    Movie2Component
  ],
  imports: [
    CommonModule,
    Movie2RoutingModule
  ]
})
export class Movie2Module { }
