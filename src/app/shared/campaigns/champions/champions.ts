import { Component, input } from '@angular/core';
import { Donor } from '../../../core/types/campaigns';

@Component({
  selector: 'app-champions',
  imports: [],
  templateUrl: './champions.html',
  styleUrl: './champions.scss'
})
export class Champions {
  donors = input.required<Donor[]>();
}
