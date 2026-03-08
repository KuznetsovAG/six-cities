import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Layout } from '../layouts/Layout';
import { RequireAuth } from '../hoc/RequireAuth';
import {
  AuthPage,
  FavoritesPage,
  MainPage,
  NotFoundPage,
  OfferPage,
} from '../pages';

const App = () => (
  <Routes>
    <Route path={ROUTES.AUTH_PAGE} element={<AuthPage />} />
    <Route element={<Layout />}>
      <Route index path={ROUTES.MAIN_PAGE} element={<MainPage />} />
      <Route
        path={ROUTES.FAVORITES_PAGE}
        element={
          <RequireAuth>
            <FavoritesPage />
          </RequireAuth>
        }
      />
      <Route path={ROUTES.OFFER_PAGE} element={<OfferPage />} />
    </Route>
    <Route path={'*'} element={<NotFoundPage />} />
  </Routes>
);

export default App;
