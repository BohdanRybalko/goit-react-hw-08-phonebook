
import React from 'react';
import { Link } from 'react-router-dom';
import { UserMenu }  from './UserMenu';

const Navigation = ({ isAuthenticated, onLogout }) => {
  return (
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
      {isAuthenticated && <UserMenu onLogout={onLogout} />}
    </nav>
  );
};

export default Navigation;
