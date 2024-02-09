import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie11RoutingModule } from './movie11-routing.module';
import { Movie11Component } from './movie11.component';


@NgModule({
  declarations: [
    Movie11Component
  ],
  imports: [
    CommonModule,
    Movie11RoutingModule
  ]
})
export class Movie11Module { }
