import { Reviews } from './types';

export const reviewsList: Reviews[] = [
  {
    id: '1f13c2fa-1364-4732-9e78-96c761335504',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2026-03-19T21:00:00.146Z',
    rating: 3,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true,
    },
  },
  {
    id: '293c0fec-e49f-400d-91fc-8dc3700daee0',
    comment:
      'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2026-03-19T21:00:00.146Z',
    rating: 5,
    user: {
      name: 'Emely',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: false,
    },
  },
  {
    id: '3f1b3e14-83ba-4a65-a584-8186d4fc41e9',
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2026-03-19T21:00:00.146Z',
    rating: 3,
    user: {
      name: 'Zak',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: false,
    },
  },
];

export const offersNearby = [
  {
    id: '1c523e4f-d09f-48f7-affc-1ecb140f2eb7',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 479,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.5,
  },
  {
    id: '14b13b9b-443f-4263-b962-2d9b8e6aecb6',
    title: 'The house among olive ',
    type: 'room',
    price: 212,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9,
  },
  {
    id: '840fcd15-c8d8-4908-acee-a38b015a4649',
    title: 'Tile House',
    type: 'hotel',
    price: 293,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
  },
];
