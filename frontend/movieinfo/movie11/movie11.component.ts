import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie11',
  templateUrl: './movie11.component.html',
  styleUrls: ['./movie11.component.css']
})
export class Movie11Component {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}
  ontheater(){
    this.router.navigate(['/theater'])
  }
}
