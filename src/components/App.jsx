
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import PrivateRoute from '../routes/PrivateRoute';
import UserMenu from './UserMenu';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Реєстрація</Link>
            </li>
            <li>
              <Link to="/login">Логін</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/contacts">Контакти</Link>
              </li>
            )}
          </ul>
          {isAuthenticated && <UserMenu onLogout={handleLogout} />}
        </nav>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/contacts" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/contacts/*"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route index element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
