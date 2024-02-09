import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatbookingRoutingModule } from './seatbooking-routing.module';
import { SeatbookingComponent } from './seatbooking.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeatbookingComponent
  ],
  imports: [
    CommonModule,
    SeatbookingRoutingModule,
    FormsModule
  ]
})
export class SeatbookingModule { }
