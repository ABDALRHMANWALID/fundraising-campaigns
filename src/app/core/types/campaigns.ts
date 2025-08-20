export interface Donor {
  amount: number;
  name: string;
  __typename?: 'Donor';
  newUser?: boolean;
}

export interface Campaign {
  id: string;
  name: string;
  goal: number;
  currentAmount: number;
  description: string;
  imageUrl: string;
  donors: Donor[];
}

export interface Donation {
  amount: number;
  donor?: string;
}
