
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bheed',
  templateUrl: './bheed.component.html',
  styleUrls: ['./bheed.component.css']
})
export class BheedComponent {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}


  onbheed() {
    this.router.navigate(['/bheed']);
  }
  ontheater(){
    this.router.navigate(['/theater'])
  }
}
