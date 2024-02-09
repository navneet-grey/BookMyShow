// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { UniqueIdService } from '../unique-id.service';
// import { LoginserviceService } from '../../service';
// import { ProcessIdGeneraterService } from '../../service';
// import { AddsenderdetailsService } from '../../frontservice';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AccessLogService } from '../../service';
// import { CookieService } from 'ngx-cookie-service';
// import { Renderer2, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component
import { filter } from 'rxjs/operators';
declare const gtag: Function;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class LoginComponent {

  constructor( private uniqueIdService: UniqueIdService,
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router) {}

    uniqueId!: string;

    // constructor(private uniqueIdService: UniqueIdService) {}
  
    ngOnInit() {
      this.uniqueId = this.uniqueIdService.getUniqueId() ?? '';
      if (!this.uniqueId) {
        console.error('Unique ID not found.');
      }
    }

  // 
    onclick(){
      this._router.navigate(['index'])
    }
    onclick1(){
      this._router.navigate(['/signup'])
    }
    // toggleFieldTextType(){
    //   this.fieldTextType=!this.fieldTextType
    // }
    openHome(){
      this._router.navigate(['/'])
    }
  

}
