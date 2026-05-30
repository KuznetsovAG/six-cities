import React from 'react';
import { SortPlaces } from '../SortPlaces';

import { PlaceCard } from '../../../../components';
import { useRentalOffers } from '../../hooks/useRentalOffers';
import { useSelector } from 'react-redux';
import { selectSortedOffers } from '../../mainPageSlice/mainPageSlice';
import { RootState } from '../../../../store/rootStore';

interface OffersListProps {
  handleActiveOfferChange: (placeId: string | null) => void;
}

export const OffersList = ({ handleActiveOfferChange }: OffersListProps) => {
  const { isLoading } = useRentalOffers();
  const offers = useSelector(selectSortedOffers);
  const selectCurrentCity = useSelector(
    (state: RootState) => state.mainPage.currentCity
  );

  if (isLoading) {
    return 'Loading....';
  }
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${selectCurrentCity}`}</b>
      <SortPlaces />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((place) => (
          <PlaceCard
            key={place.id}
            {...place}
            handleActiveOfferChange={handleActiveOfferChange}
          />
        ))}
      </div>
    </section>
  );
};
