import React from 'react';
import { SortPlaces } from '../SortPlaces';
import { places } from '../../utils/entites';
import { PlaceCard } from '../../../../components';

interface OffersListProps {
  handleActiveOfferChange: (placeId: string | null) => void;
}

export const OffersList = ({ handleActiveOfferChange }: OffersListProps) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">312 places to stay in Amsterdam</b>
    <SortPlaces />
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <PlaceCard
          key={place.id}
          {...place}
          handleActiveOfferChange={handleActiveOfferChange}
        />
      ))}
    </div>
  </section>
);
