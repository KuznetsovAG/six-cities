import React, { useState } from 'react';
import { Location } from '../../components';
import { OffersList } from './components/OffersList';

export const MainPage = () => {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);

  const handleActiveOfferChange = (placeId: string | null) => {
    setActiveOffer(placeId);
  };

  console.log('activeOffer :>> ', activeOffer);
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Location />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList handleActiveOfferChange={handleActiveOfferChange} />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
