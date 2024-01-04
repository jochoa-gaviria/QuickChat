import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private phoneStorageKey = 'phoneNumber'; //TODO: take it from env

  constructor(private cookieService: CookieService) { }
  
  setPhoneNumberItem(phoneNumber: string) : void {
    this.cookieService.set(this.phoneStorageKey, phoneNumber);
  }

  getPhoneNumberItem() : string | null {
     return this.cookieService.get(this.phoneStorageKey);
  }

}
