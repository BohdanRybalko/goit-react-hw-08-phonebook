import { Helmet } from 'react-helmet';
import { LoginForm } from '../LoginForm/loginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
