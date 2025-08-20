import { Component, input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-campaign-card',
  imports: [MatProgressBarModule, RouterLink],
  templateUrl: './campaign-card.html',
  styleUrl: './campaign-card.scss'
})
export class CampaignCard {
  imageUrl = input.required<string>();
  id = input.required<string>();
  name = input.required<string>();
  goal = input.required<number>();
  currentAmount = input.required<number>();
}
