import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrComponent } from './components/qr/qr.component';


@NgModule({
  declarations: [
    QrComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule
  ]
})
export class QrModule { }
