import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import Layout from './Layout';

import { refreshThunk } from 'store/user/userThunk';
import { selectIsRefresh } from 'store/user/userSelectors';
import { Loader } from './Loader';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import PhoneBookPage from 'page/PhoneBookPage';
import UpdateProfile from 'page/UpdateProfilePage';
import ProfilePage from 'page/ProfilePage';
import NewPage from 'page/newPage';

const LoginPage = lazy(() => import('page/LoginPage'));
const RegistrationPage = lazy(() => import('page/RegistrationPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/newpage"
          element={<PrivateRoute redirectTo="/" component={<NewPage />} />}
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        />
        <Route
          path="/profile/update"
          element={
            <PrivateRoute redirectTo="/login" component={<UpdateProfile />} />
          }
        />
      </Route>
    </Routes>
  );
};
