import { AuthContext } from '@/context/AuthContext';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'; // Update: Removed unnecessary brackets
import { useRouter } from 'next/router'; // Import useRouter from next/router
import { useContext, useState } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState(''); // Added registrationError state
  const { register } = useContext(AuthContext) || {};
  const router = useRouter(); // Initialize useRouter

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    if (emailError || passwordError || confirmPasswordError) return;

    if (typeof register === 'function') {
      try {
        await register(email, password);
        router.push('/'); // Redirect to home page after successful registration
      } catch (error) {
        setRegistrationError('Error during registration'); 
      }
    } else {
      console.error('register function is not defined in AuthContext');
      setRegistrationError('Error during registration'); 
    }
  };

  return (
        <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Card sx={{ maxWidth: 400, p: 2, borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 2, mt: 2 }}>
                Books App Register
              </Typography>
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  sx={{ mb: 1 }}
                  error={!!emailError}
                  helperText={emailError}
                  size="small"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  sx={{ mb: 1 }}
                  error={!!passwordError}
                  helperText={passwordError}
                  size="small"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPassword(e.target.value);
                  }}
                  sx={{ mb: 1 }}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                  size="small"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  size="small"
                >
                  Register
                </Button>
                {registrationError && <Typography color="error" sx={{ mb: 2 }}>{registrationError}</Typography>}
              </form>
              <Link href="/login" passHref>
                <Button
                  fullWidth
                  variant="text"
                  sx={{ mt: 1, mb: 2 }}
                  size="small"
                >
                  Already have an account? Log in
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </ThemeProvider>
  );
};

export default RegisterForm;
