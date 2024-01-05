import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '@core/services/storage.service';
import { LanguajeService } from '@core/services/languaje.service';
import { Messages } from '@core/models/messages.model';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.scss'
})
export class PhoneNumberComponent implements OnInit {

  private PHONE_NUMBER_REGEX = new RegExp(/^(\+?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})$/);
  private NON_NUMBER_REGEX = new RegExp(/\D/g);
  private SOME_TIME_WAS_VALID = false;
  messages!: Messages;

  private localStorageService = inject(LocalStorageService);
  private langService = inject(LanguajeService);

  phoneNumberCtrl = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(this.PHONE_NUMBER_REGEX)
    ]
  });

  ngOnInit(): void {
    this.messages = this.langService.getMessages();
    const storage = this.localStorageService.getPhoneNumberItem();
    if (storage) {
      this.phoneNumberCtrl.setValue(storage);
    }
  }

  @Output() validNumberEvent = new EventEmitter<string>();
  @Output() invalidNumberEvent = new EventEmitter<boolean>();

  onInputSubmit() {
    if (this.phoneNumberCtrl.valid) {
      this.SOME_TIME_WAS_VALID = true;
      
      let phoneNumberValue = this.phoneNumberCtrl.value
      let phoneNumberCleaned = phoneNumberValue.replace(this.NON_NUMBER_REGEX, "");
      this.validNumberEvent.emit(phoneNumberCleaned);

    } else if (this.SOME_TIME_WAS_VALID) {
      this.SOME_TIME_WAS_VALID = false;

      this.invalidNumberEvent.emit(true);
    }
  }

  cleanInput() {
    this.phoneNumberCtrl.reset();
    this.invalidNumberEvent.emit(true);
  }

}
