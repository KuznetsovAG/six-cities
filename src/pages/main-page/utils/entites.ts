import { Offers } from '../../../components/place-card/utils/types';
import { Cities } from './types';

export const places: Offers[] = [
  {
    id: '78d0864a-62b7-4118-91b8-50d28dabf135',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 102,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
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
    isPremium: true,
    rating: 4.4,
  },
  {
    id: 'b909fc20-3dfd-4585-9b1c-e4d80b0c8452',
    title: 'House in countryside',
    type: 'apartment',
    price: 407,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
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
    rating: 1.9,
  },
  {
    id: ' 2e886504-e493-4a95-80f4-dc1e34b1972a',
    title: ' The house among olive',
    type: 'hotel',
    price: 101,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
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
    isPremium: true,
    rating: 3,
  },
  {
    id: 'b04bdfc6-fdc7-4fcd-a35e-4eaa8a6dcb3f',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 141,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6,
  },
  {
    id: 'b48cf64b-0606-404c-928e-cf9f2e6bfaa7',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 307,
    previewImage: ' https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
  },
  {
    id: '00372acd-0a4d-4359-b0b3-6ff006968ace',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 324,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '457edb4d-acfe-4ef7-8e60-cca96c132157',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 274,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.8,
  },
];

export const POINTS = [
  {
    title: 'Саундвью',
    lat: 40.816881,
    lng: -73.872768,
  },
  {
    title: 'Ферри Поинт',
    lat: 40.814909,
    lng: -73.830682,
  },
  {
    title: 'Бронкс',
    lat: 40.862413,
    lng: -73.879357,
  },
  {
    title: 'Инвуд-Хилл',
    lat: 40.870817,
    lng: -73.927112,
  },
  {
    title: 'Пелхэм-Бей-Парк',
    lat: 40.877312,
    lng: -73.807182,
  },
];

export const CITY: Cities = {
  title: 'Paris',
  lat: 48.85661,
  lng: 2.351499,
  zoom: 13,
};
