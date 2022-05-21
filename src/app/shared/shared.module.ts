import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatIconModule,
  MatDialogModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [ConfirmDialogComponent],
  exports: [...modules ],
  imports: [
    CommonModule,
    ...modules
  ]
})
export class SharedModule { }
