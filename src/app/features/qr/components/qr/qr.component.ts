import { Component, Input } from '@angular/core';
import { UrlData } from '@qr/models/url-data';

@Component({
  selector: 'app-qr',
  standalone: false,
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss'
})
export class QrComponent {
  private URL_BASE = 'https://api.whatsapp.com/send?phone=';
  MESSAGE_URL = "Don't you have a camera? Click here"; 
  apiUrlData?: UrlData;

  @Input({ required: true }) set phoneNumber(phoneNumber: string) {
    if (phoneNumber) 
    {
      this.apiUrlData = {
        url: `${this.URL_BASE}${phoneNumber}`,
        isValid: true
      };
    }
    else {
      this.apiUrlData = {
        isValid: false
      }
    }
  }

  openUrl() {
    window.open(this.apiUrlData?.url)
  }

}
