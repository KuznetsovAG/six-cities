import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { ROUTES } from '../../constants/routes';

export const NotFoundPage = () => (
  <div className={css.wrapper}>
    <div>
      <h1>Ой-ой, похоже, эта страница потерялась.</h1>
      <div className={css.backLink}>
        <p>Может, попробуем снова?</p>
        <Link to={ROUTES.MAIN_PAGE} className={css.link}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  </div>
);
