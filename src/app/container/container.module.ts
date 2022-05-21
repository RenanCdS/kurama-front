import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerPageComponent } from './pages/container-page/container-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ContainerPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
