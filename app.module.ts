import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UniqueIdService } from './unique-id.service';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  providers: [UniqueIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
