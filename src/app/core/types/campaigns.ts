export interface Campaign {
    id: string;
    name: string;
    goal: number;
    currentAmount: number;
    description: string;
    imageUrl: string;
    donors: Array<{
        name: string;
        amount: number;
    }>;
}

export interface Donation {
    amount: number;
    donor?: string;
}