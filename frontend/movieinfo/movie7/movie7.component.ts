import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie7',
  templateUrl: './movie7.component.html',
  styleUrls: ['./movie7.component.css']
})
export class Movie7Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}
  ontheater(){
    this.router.navigate(['/theater'])
  }
}
