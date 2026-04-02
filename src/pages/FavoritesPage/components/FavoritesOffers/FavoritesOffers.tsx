import React from 'react';
import { Offers } from '../../../../components/PlaceCard/utils/types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { PlaceCard } from '../../../../components';

interface FavoritesOffersProps {
  city: string;
  offerPlaces: Offers[];
}

export const FavoritesOffers = ({
  city,
  offerPlaces,
}: FavoritesOffersProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link to={ROUTES.MAIN_PAGE} className="locations__item-link">
          <span>{city}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {offerPlaces.map((offer) => (
        <PlaceCard key={offer.id} {...offer} />
      ))}
    </div>
  </li>
);
