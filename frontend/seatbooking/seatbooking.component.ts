// seatbooking.component.ts

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrls: ['./seatbooking.component.css']
})
export class SeatbookingComponent {

  

  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router
  ) {}
  onbill(){
    this.router.navigate(['/bill'])
  }

  showPage: boolean = false;
  showPop: boolean = false;

  showBlankPage() {
    this.showPage = true;
  }

  showPopkPage() {
    this.showPop = true;
  }

  seat: number = 0;

  ticketPrice: number = 0;
  selectedSeatsCount: number = 0;
  rows: number[] = [1, 2, 3, 4, 5, 6];
  seats: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  // Define a 2D array to represent the seat status
  seatStatus: string[][] = [
    ['N/A', 'N/A', 'N/A', 'N/A', 'available', 'available', 'available', 'available'],
    ['occupied', 'occupied', 'occupied', 'occupied', 'available', 'available', 'occupied', 'occupied'],
    ['available', 'available', 'occupied', 'occupied', 'available', 'N/A', 'N/A', 'available'],
    ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'available', 'available', 'available', 'available', 'N/A', 'N/A', 'N/A'],
    ['available', 'available', 'available', 'available', 'occupied', 'occupied', 'occupied', 'occupied'],
  ];

  updateSelectedCount(): void {
    const movieSelect = document.getElementById('movie') as HTMLSelectElement;
    this.ticketPrice = parseInt(movieSelect.value);
    this.selectedSeatsCount = document.querySelectorAll('.row .selected').length;
  }

  getSeatStatus(row: number, seat: number): string {
    return this.seatStatus[row - 1][seat - 1];
  }

 


  getSeatClass(row: number, seat: number): string[] {
    const seatStatus = this.getSeatStatus(row, seat);
    const classes: string[] = [];
  
    if (seatStatus === 'N/A') {
      classes.push('na-seat');
    } else if (seatStatus === 'occupied') {
      classes.push('occupied-seat');
    }
  
    return classes;
  }
 


  toggleSeat(row: number, seat: number): void {
    const selectedSeat = document.querySelector(`.row:nth-child(${row}) .seat:nth-child(${seat})`);
    if (selectedSeat) {
      const seatStatus = this.getSeatStatus(row, seat);
      if (seatStatus === 'available' || seatStatus === 'occupied') {
        selectedSeat.classList.toggle('selected');
        this.updateSelectedCount();
      }
    }
  }
}
