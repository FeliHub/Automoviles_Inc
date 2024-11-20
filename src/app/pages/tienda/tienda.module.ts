import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TiendaPage } from './tienda.page';
import { TiendaPageRoutingModule } from './tienda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TiendaPageRoutingModule
  ],
  declarations: [TiendaPage]
})
export class TiendaPageModule {}
