import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const Logo = () => (
  <div className="header__left">
    <Link className="header__logo-link" to={ROUTES.MAIN_PAGE}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  </div>
);
