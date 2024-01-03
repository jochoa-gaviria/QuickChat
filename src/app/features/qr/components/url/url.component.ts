import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrl: './url.component.scss'
})
export class UrlComponent {

  @Input({ required: true }) url?: string;
  @Input({ required: true }) text?: string;
}
