import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdsearchComponent } from './idsearch.component';

const routes: Routes = [{ path: '', component: IdsearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsearchRoutingModule { }
