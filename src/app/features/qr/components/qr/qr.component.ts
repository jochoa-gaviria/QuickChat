import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr',
  standalone: false,
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss'
})
export class QrComponent {
  @Input() phoneNumber?: string;
}
