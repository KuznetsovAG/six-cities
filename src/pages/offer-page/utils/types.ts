export interface UserReview {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface Reviews {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserReview;
}
