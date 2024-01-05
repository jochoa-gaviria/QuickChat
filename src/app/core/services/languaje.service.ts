import { Injectable } from '@angular/core';
import { Messages } from '@core/models/messages.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  private appMessages!: Messages;
  spanish = 'ES';

  constructor() {
    let lang = navigator.language;
    if (lang) {
      lang = lang.substring(0,2).toLocaleUpperCase();
      this.appMessages = lang === this.spanish ? environment.appMessagesES as Messages : environment.appMessagesEN as Messages;
    }
    else {
      this.appMessages = environment.appMessagesEN as Messages
    }
  }

  getMessages() : Messages {
    return this.appMessages;
  } 
}

