import { Component, resource } from '@angular/core';
import { CampaignCard } from '../../../shared/campaigns/campaign-card/campaign-card';
import { environment } from '../../../../environments/environment';
import { Campaign } from '../../../core/types/campaigns';

@Component({
  selector: 'app-all-campaigns',
  imports: [CampaignCard],
  templateUrl: './all-campaigns.html',
  styleUrl: './all-campaigns.scss',
})
export class AllCampaigns {
  campaigns = resource({
    loader: async (): Promise<Campaign[]> =>
      fetch(`${environment.uri}api/campaigns`).then((res) => res.json()),
  });
}
