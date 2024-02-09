import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatbookingComponent } from './seatbooking.component';

const routes: Routes = [{ path: '', component: SeatbookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatbookingRoutingModule { }
