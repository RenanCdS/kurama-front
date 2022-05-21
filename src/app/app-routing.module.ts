import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './core/components/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'containers',
        loadChildren: () => import('./container/container.module').then(m => m.ContainerModule)
      },
      {
        path: 'imagens',
        loadChildren: () => import('./images/images.module').then(m => m.ImagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
