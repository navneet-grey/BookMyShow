import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie9RoutingModule } from './movie9-routing.module';
import { Movie9Component } from './movie9.component';


@NgModule({
  declarations: [
    Movie9Component
  ],
  imports: [
    CommonModule,
    Movie9RoutingModule
  ]
})
export class Movie9Module { }
