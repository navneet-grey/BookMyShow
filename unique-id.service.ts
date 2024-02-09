// unique-id.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  private readonly STORAGE_KEY = 'unique_id';

  constructor() { }

  generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    const uniqueId = `id_${timestamp}_${randomNum}`;
    localStorage.setItem(this.STORAGE_KEY, uniqueId);
    return uniqueId;
  }

  getUniqueId(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }
}
