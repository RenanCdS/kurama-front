import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesPageComponent } from './pages/images-page/images-page.component';


@NgModule({
  declarations: [ImagesPageComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
