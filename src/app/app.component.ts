import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuItem } from './core/models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'QuickChat';
  items: MenuItem[] = [
    {
      name: 'home', 
      url: 'home'
    }
  ];
}
