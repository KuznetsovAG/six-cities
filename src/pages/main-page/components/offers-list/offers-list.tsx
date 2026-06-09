import React from 'react';
import { SortPlaces } from '../sort-places';

import { PlaceCard } from '../../../../components';
import { useRentalOffers } from '../../hooks/useRentalOffers';
import { useSelector } from 'react-redux';
import { selectSortedOffers } from '../../main-page-slice/main-page-slice';
import { RootState } from '../../../../store/rootStore';
import { Loader } from '../../../../components/loader';

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
    return <Loader />;
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
