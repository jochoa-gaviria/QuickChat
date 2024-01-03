import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrComponent } from './components/qr/qr.component';
import { HomeComponent } from './pages/home/home.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QrCodeModule } from 'ng-qrcode';
import { UrlComponent } from './components/url/url.component';


@NgModule({
  declarations: [
    QrComponent,
    HomeComponent,
    PhoneNumberComponent,
    UrlComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule,
    ReactiveFormsModule,
    QrCodeModule
  ]
})
export class QrModule { }
