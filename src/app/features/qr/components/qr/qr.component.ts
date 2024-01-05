import { Component, Input, OnInit, inject } from '@angular/core';
import { UrlData } from '@qr/models/url-data.model';
import { LanguajeService } from '@core/services/languaje.service';
import { Messages } from '@core/models/messages.model';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-qr',
  standalone: false,
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss'
})
export class QrComponent implements OnInit {
  private langService = inject(LanguajeService);
  private urlBase = environment.whatsAppUrlBase;
  messages!: Messages;
  apiUrlData?: UrlData;

  @Input({ required: true }) set phoneNumber(phoneNumber: string) {
    if (phoneNumber) 
    {
      this.apiUrlData = {
        url: `${this.urlBase}${phoneNumber}`,
        isValid: true
      };
    }
    else {
      this.apiUrlData = {
        isValid: false
      }
    }
  }

  ngOnInit(): void {
    this.messages = this.langService.getMessages();
  }

  openUrl() {
    window.open(this.apiUrlData?.url)
  }

}
