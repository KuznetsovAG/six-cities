import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Location } from '../../components';
import { OffersList } from './components/OffersList';
import { CITY } from './utils/entites';
import { Map } from './components/Map';
import { selectSortedOffers } from './mainPageSlice/mainPageSlice';

export const MainPage = () => {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const offers = useSelector(selectSortedOffers);

  const handleActiveOfferChange = (placeId: string | null) => {
    setActiveOffer(placeId);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Location />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList handleActiveOfferChange={handleActiveOfferChange} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={CITY} points={offers} selectId={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
