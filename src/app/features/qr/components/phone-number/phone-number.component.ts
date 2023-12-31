import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.scss'
})
export class PhoneNumberComponent {

  private PHONE_NUMBER_REGEX = new RegExp(/^(\+?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})$/);
  private NON_NUMBER_REGEX = new RegExp(/\D/g);

  phoneNumberCtrl = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(this.PHONE_NUMBER_REGEX)
    ]
  });

  @Output() validNumberEvent = new EventEmitter<string>();

  onInputSubmit() {
    if (this.phoneNumberCtrl.valid) {
      const phoneNumberValue = this.phoneNumberCtrl.value
      const phoneNumberCleaned = phoneNumberValue.replace(this.NON_NUMBER_REGEX, "");
      this.validNumberEvent.emit(phoneNumberCleaned);
    }
  }

}
