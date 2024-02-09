import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}

  title = 'bookmovieticket';


  

}
