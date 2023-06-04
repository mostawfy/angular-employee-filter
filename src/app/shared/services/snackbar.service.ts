import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  show(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }

  showGeneric(): void {
    this.snackBar.open('Something went Wrong!', 'Close', {
      duration: 2000,
    });
  }
}
