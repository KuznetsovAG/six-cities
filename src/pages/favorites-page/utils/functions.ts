import { Offers } from '../../../components/place-card/utils/types';

type OfferGroup = Record<string, Offers[]>;

export const createOfferCityGroup = (offer: Offers[]) => {
  const result: OfferGroup = {};
  offer.forEach((item) => {
    const cityName = item.city.name;
    if (result[cityName]) {
      result[cityName].push(item);
    } else {
      result[cityName] = [item];
    }
  });

  return result;
};
