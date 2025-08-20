import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WebSocket } from '../../../core/services/WebSocket/web-socket';
import { Campaigns } from '../../../core/services/campaigns/campaigns';
import { DonationForm } from '../../../shared/campaigns/donation-form/donation-form';
import { Partners } from '../../../shared/campaigns/partners/partners';
import { Champions } from '../../../shared/campaigns/champions/champions';
import { WebSocketMessage } from '../../../core/types/webSocket';

@Component({
  selector: 'app-campaign-details',
  imports: [
    MatProgressBarModule,
    CommonModule,
    DonationForm,
    Partners,
    Champions,
  ],
  templateUrl: './campaign-details.html',
  styleUrl: './campaign-details.scss',
})
export class CampaignDetails implements OnInit, OnDestroy {
  constructor(
    private readonly campaigns: Campaigns,
    private route: ActivatedRoute,
    private webSocket: WebSocket
  ) {}
  campaign = signal<any>(null);
  id!: string;

  getCampaign(id: string) {
    this.campaigns.getCampaign(id).valueChanges.subscribe((data: any) => {
      this.campaign.set(data?.data?.campaign);
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCampaign(this.id);

    this.webSocket.connect();
    this.webSocket.messages().subscribe((m: WebSocketMessage) => {
      if (m?.['campaignId'] == this.id) {
        this.campaign.update((data) => ({
          ...data,
          currentAmount: data?.currentAmount + m?.['amount'],
          donors: [
            ...data?.donors,
            { name: m?.['donor'], amount: m?.['amount'], newUser: true },
          ],
        }));
      }
    });
  }

  ngOnDestroy(): void {
    this.webSocket.close();
  }
}
