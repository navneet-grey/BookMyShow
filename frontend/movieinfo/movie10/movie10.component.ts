import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie10',
  templateUrl: './movie10.component.html',
  styleUrls: ['./movie10.component.css']
})
export class Movie10Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}
  ontheater(){
    this.router.navigate(['/theater'])
  }
}
