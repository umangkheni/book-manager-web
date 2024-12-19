import { Box, Typography } from '@mui/material';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { AuthProvider } from '../context/AuthContext';
import { BookProvider } from '../context/BookContext';

const Home = () => {
    return (
        <AuthProvider>
            <BookProvider>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#333' }}>
                    <Typography variant="h1" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>Book Manager</Typography>
                    <BookForm sx={{ my: 2 }} />
                    <BookList sx={{ my: 2 }} />
                </Box>
            </BookProvider>
        </AuthProvider>
    );
};

export default Home;
