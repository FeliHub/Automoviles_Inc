import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPageModule {}