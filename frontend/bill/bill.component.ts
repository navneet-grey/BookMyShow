import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// @Component({
//   selector: 'app-bill',
//   templateUrl: './bill.component.html',
//   styleUrls: ['./bill.component.css']
// })
// export class BillComponent {
//   private ticketPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//   private selectedSeatsCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

//   ticketPrice$: Observable<number> = this.ticketPriceSubject.asObservable();
//   selectedSeatsCount$: Observable<number> = this.selectedSeatsCountSubject.asObservable();

//   updateSelectedCount(ticketPrice: number, selectedSeatsCount: number): void {
//     this.ticketPriceSubject.next(ticketPrice);
//     this.selectedSeatsCountSubject.next(selectedSeatsCount);
//   }
// }


// seat-booking.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import { UniqueIdService } from 'src/app/unique-id.service';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
@Injectable({
  providedIn: 'root',
})

export class BillComponent {

  constructor(private uniqueIdService: UniqueIdService,
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}

  // uniqueId: string;

  ngOnInit() {
    this.uniqueId! = this.uniqueIdService.getUniqueId() || this.uniqueIdService.generateUniqueId();
  }

  uniqueId!: string;

  generateUniqueId() {
    const timestamp = new Date().getTime(); // Current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Random number between 0 and 999
    this.uniqueId = `id_${timestamp}_${randomNum}`; // Concatenating timestamp and random number
  }


  private ticketPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private selectedSeatsCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  ticketPrice$: Observable<number> = this.ticketPriceSubject.asObservable();
  selectedSeatsCount$: Observable<number> = this.selectedSeatsCountSubject.asObservable();

  updateSelectedCount(ticketPrice: number, selectedSeatsCount: number): void {
    this.ticketPriceSubject.next(ticketPrice);
    this.selectedSeatsCountSubject.next(selectedSeatsCount);
  }


  

   
    onindex(){
      this.router.navigate(['/'])
    }
}
