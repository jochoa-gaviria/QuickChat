import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  phoneNumber: string = '';

  onValidNumberEvent(event: string) {
    this.phoneNumber = event
  }
}
