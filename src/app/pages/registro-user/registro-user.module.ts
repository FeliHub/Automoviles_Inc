import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RegistroUserPage } from './registro-user.page';
import { RegistroUserPageRoutingModule } from './registro-user-routing.module';

import { RegisterComponent } from 'src/app/components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUserPageRoutingModule
  ],
  declarations: [RegistroUserPage, RegisterComponent]
})
export class RegistroUserPageModule {}
