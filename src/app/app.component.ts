import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuItem } from './core/models/menu-item.model';
import { LanguajeService } from './core/services/languaje.service';
import { Messages } from './core/models/messages.model';

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
export class AppComponent implements OnInit {

  messages!: Messages;
  langService = inject(LanguajeService);
  title = 'QuickChat';
  items: MenuItem[] = [
    {
      name: 'home', 
      url: 'home'
    }
  ];

  ngOnInit(): void {
    this.messages = this.langService.getMessages();
    this.title = this.messages.title;
  }
}
