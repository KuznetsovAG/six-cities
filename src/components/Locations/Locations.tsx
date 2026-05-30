import { Link } from 'react-router-dom';
import { locations } from '../../constants/constants';
import { nanoid } from 'nanoid';
import { ROUTES } from '../../constants/routes';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../../pages/MainPage/mainPageSlice/mainPageSlice';

export const Location = () => {
  const dispatch = useDispatch();

  const handleChangeCurrentLocation = (location: string) => {
    dispatch(setCurrentCity(location));
  };
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((location) => (
            <li className="locations__item" key={nanoid()}>
              <Link
                to={ROUTES.MAIN_PAGE}
                className="locations__item-link tabs__item"
                onClick={() => handleChangeCurrentLocation(location)}
              >
                <span>{location}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
