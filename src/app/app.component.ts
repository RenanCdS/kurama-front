import { Component } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false;
  constructor(public readonly spinnerService: SpinnerService) {
    this.spinnerService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
  }
  title = 'kurama-front';
}
