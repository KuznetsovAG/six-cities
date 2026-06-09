import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Location } from '../../components';
import { OffersList } from './components/OffersList';
import { Map } from './components/Map';
import {
  selectCurrentCity,
  selectSortedOffers,
} from './mainPageSlice/mainPageSlice';
import { useRentalOffers } from './hooks/useRentalOffers';
import { MainEmptyPage } from '../MainEmptyPage/MainEmptyPage';

export const MainPage = () => {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const offers = useSelector(selectSortedOffers);
  const currentCity = useSelector(selectCurrentCity);
  const { isLoading } = useRentalOffers();

  const handleActiveOfferChange = (placeId: string | null) => {
    setActiveOffer(placeId);
  };

  if (isLoading && offers.length === 0) {
    return (
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Location />
          <h1>Loading...</h1>
        </main>
      </div>
    );
  }

  if (offers.length === 0) {
    return <MainEmptyPage city={currentCity} />;
  }

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
                <Map points={offers} selectId={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
