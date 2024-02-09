import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.css']
})
export class Movie1Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}

  ontheater(){
    this.router.navigate(['/theater'])
  }
}
