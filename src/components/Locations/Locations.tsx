import { Link } from 'react-router-dom';
import { locations } from '../../constants/constants';
import { nanoid } from 'nanoid';
import { ROUTES } from '../../constants/routes';

export const Location = () => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => (
          <li className="locations__item" key={nanoid()}>
            <Link
              to={ROUTES.MAIN_PAGE}
              className="locations__item-link tabs__item"
            >
              <span>{location}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
