import  Navigation  from '../components/Navigation';
import { UserMenu } from '../components/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../routes/hook/index';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
