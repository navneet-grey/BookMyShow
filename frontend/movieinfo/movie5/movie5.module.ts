import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie5RoutingModule } from './movie5-routing.module';
import { Movie5Component } from './movie5.component';


@NgModule({
  declarations: [
    Movie5Component
  ],
  imports: [
    CommonModule,
    Movie5RoutingModule
  ]
})
export class Movie5Module { }
