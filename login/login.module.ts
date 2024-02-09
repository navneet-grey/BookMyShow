import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

// import { AuthService } from './path-to-your-service/auth.service';



@NgModule({
  
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})

@NgModule({
  imports: [HttpClientModule],
  // ... other imports and declarations
  providers: [LoginComponent]
})

export class LoginModule { }
