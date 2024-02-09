import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie4RoutingModule } from './movie4-routing.module';
import { Movie4Component } from './movie4.component';


@NgModule({
  declarations: [
    Movie4Component
  ],
  imports: [
    CommonModule,
    Movie4RoutingModule
  ]
})
export class Movie4Module { }
