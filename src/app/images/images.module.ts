import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { SharedModule } from '../shared/shared.module';
import { PullImageComponent } from './components/pull-image/pull-image.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ImagesPageComponent, PullImageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
