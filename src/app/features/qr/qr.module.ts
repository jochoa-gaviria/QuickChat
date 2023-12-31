import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrComponent } from './components/qr/qr.component';
import { HomeComponent } from './components/home/home.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QrComponent,
    HomeComponent,
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule,
    ReactiveFormsModule
  ]
})
export class QrModule { }
