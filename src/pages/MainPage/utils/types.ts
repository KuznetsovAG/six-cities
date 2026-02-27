export type Place = {
  id: string;
  title: string;
  type: 'Apartment' | 'Room';
  price: number;
  imageUrl: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number; // 0–5
};
