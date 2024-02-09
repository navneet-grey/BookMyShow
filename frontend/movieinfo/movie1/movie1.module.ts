import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie1RoutingModule } from './movie1-routing.module';
import { Movie1Component } from './movie1.component';


@NgModule({
  declarations: [
    Movie1Component
  ],
  imports: [
    CommonModule,
    Movie1RoutingModule
  ]
})
export class Movie1Module { }
