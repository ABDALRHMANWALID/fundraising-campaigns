import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Campaigns } from './layout/campaigns/campaigns';
import { CampaignDetails } from './layout/campaigns/campaign-details/campaign-details';
import { AllCampaigns } from './layout/campaigns/all-campaigns/all-campaigns';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'campaigns',
        component: Campaigns,
        children: [
          { path: '', component: AllCampaigns },
          { path: ':id', component: CampaignDetails },
        ],
      },
      { path: '**', redirectTo: 'campaigns' },
    ],
  },
];
