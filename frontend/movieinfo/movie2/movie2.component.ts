import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie2',
  templateUrl: './movie2.component.html',
  styleUrls: ['./movie2.component.css']
})
export class Movie2Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}

  ontheater(){
    this.router.navigate(['/theater'])
  }
}
