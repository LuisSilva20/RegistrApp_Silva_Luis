import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarseAPage } from './registrarse-a.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarseAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarseAPageRoutingModule {}
