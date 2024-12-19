import { Box, Button, Card, CardContent, Link, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const LoginForm = () => {
  const {login} = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (emailError || passwordError) return;
    try {
      await login(email, password);
      router.push('/'); // Redirect to home route after successful login
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <ThemeProvider theme={theme} >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Card sx={{ maxWidth: 400, p: 2, borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 2, mt: 2 }}>
                Blog App Login
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
                  type={showPassword ? 'text' : 'password'}
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  size="small"
                >
                  Login
                </Button>
              </form>
              <Link href="/register" passHref>
                <Button
                  fullWidth
                  variant="text"
                  sx={{ mt: 1, mb: 2 }}
                  size="small"
                >
                  Don't have an account? Register
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </ThemeProvider>
  );
};

export default LoginForm;
