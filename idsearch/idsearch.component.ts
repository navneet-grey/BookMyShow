import { Component } from '@angular/core';

import { UniqueIdService } from '../unique-id.service';

@Component({
  selector: 'app-idsearch',
  templateUrl: './idsearch.component.html',
  styleUrls: ['./idsearch.component.css']
})
export class IdsearchComponent {
  constructor( private uniqueIdService: UniqueIdService) {}

    uniqueId!: string;

    // constructor(private uniqueIdService: UniqueIdService) {}
  
    ngOnInit() {
      this.uniqueId = this.uniqueIdService.getUniqueId() ?? '';
      if (!this.uniqueId) {
        console.error('Unique ID not found.');
      }
    }
}
