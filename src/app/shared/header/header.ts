import { Component, input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  drawer = input.required<MatDrawer>();
}
