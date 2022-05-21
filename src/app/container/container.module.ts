import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerPageComponent } from './pages/container-page/container-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateContainerComponent } from './components/create-container/create-container.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContainerPageComponent, CreateContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
