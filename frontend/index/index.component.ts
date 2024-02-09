

import { Component, ElementRef, Renderer2, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {
  // @ViewChildren('productContainer') productContainers!: QueryList<ElementRef<HTMLDivElement>>;
  // @ViewChildren('nxtBtn') nxtBtns!: QueryList<ElementRef<HTMLButtonElement>>;
  // @ViewChildren('preBtn') preBtns!: QueryList<ElementRef<HTMLButtonElement>>;

  @ViewChildren('productContainer') productContainers!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('nxtBtn') nxtBtns!: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChildren('preBtn') preBtns!: QueryList<ElementRef<HTMLButtonElement>>;


  // Inside the constructor
constructor(private renderer: Renderer2 , 
  public router: Router,
  private _route: ActivatedRoute,
  public _router:Router) {
  this.productContainers = new QueryList<ElementRef<HTMLDivElement>>();
  this.nxtBtns = new QueryList<ElementRef<HTMLButtonElement>>();
  this.preBtns = new QueryList<ElementRef<HTMLButtonElement>>();
}


  ngAfterViewInit() {
    this.productContainers.forEach((container, i) => {
      const containerWidth = container.nativeElement.getBoundingClientRect().width;

      this.renderer.listen(this.nxtBtns.toArray()[i].nativeElement, 'click', () => {
        container.nativeElement.scrollLeft += containerWidth;
      });

      this.renderer.listen(this.preBtns.toArray()[i].nativeElement, 'click', () => {
        container.nativeElement.scrollLeft -= containerWidth;
      });
    });
  }

  scrollContainer(container: ElementRef<HTMLDivElement>, direction: 'left' | 'right') {
    const containerWidth = container.nativeElement.getBoundingClientRect().width;
    const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
    container.nativeElement.scrollLeft += scrollAmount;
  }

  onbheed() {
    this.router.navigate(['/bheed']);
  }
  onmovie1() {
    this.router.navigate(['/movie1']);
  }
  onmovie2() {
    this.router.navigate(['/movie2']);
  }
  onmovie3() {
    this.router.navigate(['/movie3']);
  }
  onmovie4() {
    this.router.navigate(['/movie4']);
  }
  onmovie5() {
    this.router.navigate(['/movie5']);
  }
  onmovie6() {
    this.router.navigate(['/movie6']);
  }
  onmovie7() {
    this.router.navigate(['/movie7']);
  }
  onmovie8() {
    this.router.navigate(['/movie8']);
  }
  onmovie9() {
    this.router.navigate(['/movie9']);
  }
  onmovie10() {
    this.router.navigate(['/movie10']);
  }
  onmovie11() {
    this.router.navigate(['/movie11']);
  }
}


