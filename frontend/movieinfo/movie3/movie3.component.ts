import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie3',
  templateUrl: './movie3.component.html',
  styleUrls: ['./movie3.component.css']
})
export class Movie3Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}

  ontheater(){
    this.router.navigate(['/theater'])
  }

}
