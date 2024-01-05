import { Component } from '@angular/core';
import { SocialMediaItem } from '@core/models/social-media-item.model';
import { environment } from '@environments/environment';

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
      url: environment.twitterUrl
    },
    {
      title: 'GitHub',
      alternativeText: 'GitHub',
      iconPath: './assets/svg/github.svg',
      url: environment.githubUrl
    },
    {
      title: 'LinkedIn',
      alternativeText: 'LinkedIn',
      iconPath: './assets/svg/linkedIn.svg',
      url: environment.linkedinUrl
    }
  ]
}
