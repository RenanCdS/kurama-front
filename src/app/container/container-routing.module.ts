import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerPageComponent } from './pages/container-page/container-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
