import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie10RoutingModule } from './movie10-routing.module';
import { Movie10Component } from './movie10.component';


@NgModule({
  declarations: [
    Movie10Component
  ],
  imports: [
    CommonModule,
    Movie10RoutingModule
  ]
})
export class Movie10Module { }
