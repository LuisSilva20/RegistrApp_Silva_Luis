import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarseAPageRoutingModule } from './registrarse-a-routing.module';

import { RegistrarseAPage } from './registrarse-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarseAPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarseAPage]
})
export class RegistrarseAPageModule {}
