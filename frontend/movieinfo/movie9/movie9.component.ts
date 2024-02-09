import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie9',
  templateUrl: './movie9.component.html',
  styleUrls: ['./movie9.component.css']
})
export class Movie9Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}
  ontheater(){
    this.router.navigate(['/theater'])
  }
}
