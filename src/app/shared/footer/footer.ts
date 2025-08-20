import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  imports: [MatDividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  sections = [
    {
      title: 'Product',
      links: [
        {
          title: 'Overview',
          link: '/overview',
        },
        {
          title: 'Features',
          link: '/features',
        },
        {
          title: 'Solutions',
          link: '/solutions',
        },

        {
          title: 'Tutorials',
          link: '/tutorials',
        },
        {
          title: 'Pricing',
          link: '/pricing',
        },
        {
          title: 'Releases',
          link: '/releases',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          title: 'About',
          link: '/about'
        },
        {
          title: 'Careers',
          link: '/careers'
        },
        {
          title: 'Press',
          link: '/press'
        },
        {
          title: 'News',
          link: '/news'
        },
        {
          title: 'Media Kit',
          link: '/media-kit'
        },
        {
          title: 'Contact',
          link: '/contact'
        },
      ]
    },
    {
      title: 'Resources',
      links: [
        {
          title: 'Blog',
          link: '/blog'
        },
        {
          title: 'Newsletter',
          link: '/newsletter'
        },
        {
          title: 'Events',
          link: '/events'
        },
        {
          title: 'Help Center',
          link: '/help-center'
        },
        {
          title: 'Tutorials',
          link: '/tutorials'
        },
        {
          title: 'Support',
          link: '/support'
        },
      ]
    },
    {
      title: 'Legal',
      links: [
        {
          title: 'Terms',
          link: '/terms'
        },
        {
          title: 'Privacy',
          link: '/privacy'
        },
        {
          title: 'Cookies',
          link: '/cookies'
        },
        {
          title: 'Licenses',
          link: '/licenses'
        },
        {
          title: 'Settings',
          link: '/settings'
        },
        {
          title: 'Contact',
          link: '/contact'
        },
      ]
    },
  ];
}
