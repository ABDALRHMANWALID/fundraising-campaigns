import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { environment } from '../../../../environments/environment';
import { Donation } from '../../types/campaigns';

@Injectable({
  providedIn: 'root',
})
export class Campaigns {
  constructor(private readonly apollo: Apollo, private readonly http: HttpClient) {}

  getCampaign(id: string) {
    return this.apollo.watchQuery({
      query: gql`
        query Query($campaignId: ID!) {
          campaign(id: $campaignId) {
            currentAmount
            description
            donors {
              amount
              name
            }
            imageUrl
            goal
            name
            id
          }
        }
      `,
      variables: {
        campaignId: id,
      },
    });
  }

  createDonation(campaignId: string, donation: Donation) {
    return this.http.post(`${environment.uri}api/campaigns/${campaignId}/donate`, donation);
  }
}
