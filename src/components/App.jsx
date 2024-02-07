import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import PrivateRoute from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import UserMenu from './UserMenu';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserMenu />}>
        <Route
          path="/Registration"
          element={<RestrictedRoute redirectTo="/" component={<Registration />} />}
         />
        <Route
          path="/Contacts"
          element={<RestrictedRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route
          path="/Login"
          element={<PrivateRoute redirectTo="/login" component={<Login />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
