import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    public _router:Router) {}
  modalVisible = false;
  dynamicTitle = 'Location'; // Set a default value

  ngOnInit(): void {
    this.openModal();
  }
  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  changeTitle(name: string) {
    this.dynamicTitle = name;
    this.closeModal();
  }
  onidsearch() {
    this.router.navigate(['/idsearch']);
  }

  onWindowClick(event: MouseEvent) {
    if (event.target === document.getElementById('myModal')) {
      this.closeModal();
    }
  }
}
