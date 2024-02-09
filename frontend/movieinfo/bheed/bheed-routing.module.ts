import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BheedComponent } from './bheed.component';

const routes: Routes = [{ path: '', component: BheedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BheedRoutingModule { }
