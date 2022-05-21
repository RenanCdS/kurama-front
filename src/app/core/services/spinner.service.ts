import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private readonly subject = new Subject<boolean>();
  isLoading$ = this.subject.asObservable();
  constructor() { }

  openLoading(): void {
    this.subject.next(true);
  }

  closeLoading(): void {
    this.subject.next(false);
  }
}
