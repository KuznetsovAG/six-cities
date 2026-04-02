import { FavoritesOffers } from './components';
import { favoritesItems } from './utils/entities';
import { createOfferCityGroup } from './utils/functions';

export const FavoritesPage = () => {
  const favoritesOffers = createOfferCityGroup(favoritesItems);

  return (
    <div className="">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesOffers).map((place) => {
                const offerPlace = favoritesOffers[place];
                return (
                  <FavoritesOffers
                    key={place}
                    city={place}
                    offerPlaces={offerPlace}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};
