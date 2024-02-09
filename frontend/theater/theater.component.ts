import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}


  onseatbooking() {
    this.router.navigate(['/seatbooking']);
  }


  activeButton: string | null = null;

  changeColor(day: string): void {
    // Reset the color of the previously clicked button
    if (this.activeButton !== null) {
      const prevButton = document.querySelector(`[data-day="${this.activeButton}"]`);
      if (prevButton) {
        prevButton.classList.remove('blue');
      }
    }

    // Set the color of the currently clicked button
    this.activeButton = day;
    const currentButton = document.querySelector(`[data-day="${day}"]`);
    if (currentButton) {
      currentButton.classList.add('blue');
    }
  }
}


// import { Component, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-theater',
//   templateUrl: './theater.component.html',
//   styleUrls: ['./theater.component.css']
// })
// export class TheaterComponent {
//   private prevButton: ElementRef | null = null;

//   changeColor(day: string): void {
//     const button = this.prevButton?.nativeElement;

//     if (button) {
//       button.classList.remove('blue');
//     }

//     const currentButton = this.findButtonByDay(day);
    
//     if (currentButton) {
//       currentButton.nativeElement.classList.add('blue');
//       this.prevButton = currentButton;
//     }
//   }

//   private findButtonByDay(day: string): ElementRef | null {
//     // Implement logic to find and return the button ElementRef by day
//     // This may involve querying the DOM or accessing a reference variable
//     return null;
//   }
// }
