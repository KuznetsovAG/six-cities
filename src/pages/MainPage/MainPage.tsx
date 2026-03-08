import React from 'react';
import { places } from './utils/entites';
import { PlaceCard } from './components/PlaceCard/PlaceCard';
import { SortPlaces } from './components/SortPlaces/SortPlaces';
import { Location } from '../../components';

export const MainPage = () => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Location />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <SortPlaces />
            <div className="cities__places-list places__list tabs__content">
              {places.map((place) => (
                <PlaceCard key={place.id} {...place} />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);
