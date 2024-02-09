import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie5',
  templateUrl: './movie5.component.html',
  styleUrls: ['./movie5.component.css']
})
export class Movie5Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}
  ontheater(){
    this.router.navigate(['/theater'])
  }
}
