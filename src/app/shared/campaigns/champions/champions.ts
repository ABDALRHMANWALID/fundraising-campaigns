import { Component, input } from '@angular/core';

@Component({
  selector: 'app-champions',
  imports: [],
  templateUrl: './champions.html',
  styleUrl: './champions.scss'
})
export class Champions {
  donors = input.required<any[]>();
}
