import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Location } from '../../components';
import { OffersList } from './components/offers-list';
import { Map } from './components/map';
import {
  selectCurrentCity,
  selectSortedOffers,
} from './main-page-slice/main-page-slice';
import { useRentalOffers } from './hooks/useRentalOffers';
import { Loader } from '../../components/loader';

export const MainPage = () => {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const offers = useSelector(selectSortedOffers);
  const currentCity = useSelector(selectCurrentCity);
  const { isLoading } = useRentalOffers();

  const handleActiveOfferChange = (placeId: string | null) => {
    setActiveOffer(placeId);
  };

  if (!isLoading && offers.length === 0) {
    return (
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              We could not find any property available at the moment in{' '}
              {currentCity}
            </p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );
  }

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Location />
        <div className="cities">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="cities__places-container container">
              <OffersList handleActiveOfferChange={handleActiveOfferChange} />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map points={offers} selectId={activeOffer} />
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
