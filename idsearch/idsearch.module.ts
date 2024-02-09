import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsearchRoutingModule } from './idsearch-routing.module';
import { IdsearchComponent } from './idsearch.component';


@NgModule({
  declarations: [
    IdsearchComponent
  ],
  imports: [
    CommonModule,
    IdsearchRoutingModule
  ]
})
export class IdsearchModule { }
