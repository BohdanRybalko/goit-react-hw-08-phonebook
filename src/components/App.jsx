import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import PrivateRoute from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import { Layout } from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/registration"
          element={<RestrictedRoute redirectTo="/" component={<Registration />} />}
         />
        <Route
          path="/contacts"
          element={<RestrictedRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route
          path="/login"
          element={<PrivateRoute redirectTo="/login" component={<Login />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
