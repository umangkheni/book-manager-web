import LoginForm from '@/components/LoginForm';
import { AuthProvider } from '@/context/AuthContext';

const Login = () => {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
};

export default Login;
