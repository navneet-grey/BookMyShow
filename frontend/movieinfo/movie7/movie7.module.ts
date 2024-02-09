import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie7RoutingModule } from './movie7-routing.module';
import { Movie7Component } from './movie7.component';


@NgModule({
  declarations: [
    Movie7Component
  ],
  imports: [
    CommonModule,
    Movie7RoutingModule
  ]
})
export class Movie7Module { }
