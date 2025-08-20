import { Component, resource } from '@angular/core';
import { CampaignCard } from '../../../shared/campaigns/campaign-card/campaign-card';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-all-campaigns',
  imports: [CampaignCard],
  templateUrl: './all-campaigns.html',
  styleUrl: './all-campaigns.scss',
})
export class AllCampaigns {
  campaigns = resource({
    loader: async (): Promise<any> =>
      fetch(`${environment.uri}api/campaigns`).then((res) => res.json()),
  });
}
