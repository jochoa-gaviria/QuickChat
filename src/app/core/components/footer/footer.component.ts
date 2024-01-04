import { Component } from '@angular/core';
import { SocialMediaItem } from '../../models/social-media-item';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialMediaItems: SocialMediaItem[] = [
    {
      title: 'X',
      alternativeText: 'X-Twitter',
      iconPath: './assets/svg/x-twitter.svg',
      url: 'https://twitter.com/ochoa_jdav' ////TODO: take it from env
    },
    {
      title: 'GitHub',
      alternativeText: 'GitHub',
      iconPath: './assets/svg/github.svg',
      url: 'https://github.com/jochoa-gaviria' ////TODO: take it from env
    },
    {
      title: 'LinkedIn',
      alternativeText: 'LinkedIn',
      iconPath: './assets/svg/linkedIn.svg',
      url: 'https://www.linkedin.com/in/jochoa-gaviria/' //TODO: take it from env
    }
  ]
}
