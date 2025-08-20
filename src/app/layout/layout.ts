import { Component } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { Header } from '../shared/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
