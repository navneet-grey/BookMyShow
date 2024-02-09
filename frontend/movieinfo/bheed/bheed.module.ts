import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BheedRoutingModule } from './bheed-routing.module';
import { BheedComponent } from './bheed.component';
import { HeaderRoutingModule } from 'src/app/header/header-routing.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';


@NgModule({
  declarations: [
    BheedComponent
  ],
  imports: [
    CommonModule,
    BheedRoutingModule,
    HeaderModule,
    FooterModule

  ]
})
export class BheedModule { }
