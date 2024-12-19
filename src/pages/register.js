import RegisterForm from '@/components/RegisterForm';
import { AuthProvider } from '@/context/AuthContext';

const Register = () => {
  return (
    <AuthProvider>
      <RegisterForm />
    </AuthProvider>
  );
};

export default Register;
