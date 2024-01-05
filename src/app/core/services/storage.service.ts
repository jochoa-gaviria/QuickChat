import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private phoneStorageKey = environment.phoneStorageKey;

  private cookieService = inject(CookieService);
  
  setPhoneNumberItem(phoneNumber: string) : void {
    this.cookieService.set(this.phoneStorageKey, phoneNumber);
  }

  getPhoneNumberItem() : string | null {
     return this.cookieService.get(this.phoneStorageKey);
  }

}
