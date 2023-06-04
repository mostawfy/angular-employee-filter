import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoadingService {
  private isLoading = new Subject<boolean>();

  start(): void {
    this.isLoading.next(true);
  }

  stop(): void {
    this.isLoading.next(false);
  }

  getLoading() {
    return this.isLoading;
  }
}
