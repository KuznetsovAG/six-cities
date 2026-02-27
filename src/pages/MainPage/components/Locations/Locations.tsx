import { locations } from '../../../../constants/constants';
import { nanoid } from 'nanoid';

export const Location = () => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => (
          <li className="locations__item" key={nanoid()}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{location}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
