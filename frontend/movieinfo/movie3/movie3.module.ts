import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie3RoutingModule } from './movie3-routing.module';
import { Movie3Component } from './movie3.component';


@NgModule({
  declarations: [
    Movie3Component
  ],
  imports: [
    CommonModule,
    Movie3RoutingModule
  ]
})
export class Movie3Module { }
