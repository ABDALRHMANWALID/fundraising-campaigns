import { Component } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { Header } from '../shared/header/header';
import { RouterOutlet } from '@angular/router';
import { NewsSubscription } from '../shared/news-subscription/news-subscription';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  imports: [
    Header,
    RouterOutlet,
    Footer,
    NewsSubscription,
    MatSidenavModule,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
