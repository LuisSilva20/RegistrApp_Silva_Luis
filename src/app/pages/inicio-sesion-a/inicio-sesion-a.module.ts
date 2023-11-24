import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionAPageRoutingModule } from './inicio-sesion-a-routing.module';

import { InicioSesionAPage } from './inicio-sesion-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionAPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InicioSesionAPage]
})
export class InicioSesionAPageModule {}
