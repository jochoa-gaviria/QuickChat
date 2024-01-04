import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  //@Input({ required: true }) items: MenuItem[];
  items: MenuItem[] = [
    {
      name: 'home', 
      url: 'QuickChat'
    },
    {
      name: 'other',
      url: 'other'
    }
  ];
}
