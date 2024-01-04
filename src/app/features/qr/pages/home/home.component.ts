import { Component, Injector, OnInit, effect, inject, signal } from '@angular/core';
import { LocalStorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  phoneNumber = signal<string>('');
  storageKey = 'phoneNumber';

  injector = inject(Injector);

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const storage = this.localStorageService.getPhoneNumberItem();
    if (storage) {
      this.phoneNumber.set(storage);
    }
    this.trackChanges();
  }

  trackChanges() {
    effect(() => {
      const phoneNumber = this.phoneNumber();
      this.localStorageService.setPhoneNumberItem(phoneNumber);
    }, { injector: this.injector });
  }

  onValidNumberEvent(event: string) {
    this.phoneNumber.set(event);
  }

  onInvalidNumberEvent() {
    this.phoneNumber.set('');
  }
}
