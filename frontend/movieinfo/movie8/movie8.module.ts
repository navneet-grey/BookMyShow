import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie8RoutingModule } from './movie8-routing.module';
import { Movie8Component } from './movie8.component';


@NgModule({
  declarations: [
    Movie8Component
  ],
  imports: [
    CommonModule,
    Movie8RoutingModule
  ]
})
export class Movie8Module { }
