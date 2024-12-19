import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BookContext } from '../context/BookContext';

const BookList = () => {
    const { books } = useContext(BookContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <Grid container spacing={2} sx={{ mt: 5, justifyContent: 'center', px: 4 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
                Book List
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', mx: 'auto' }}>
                {books.map((book) => (
                    <Grid item key={book._id} xs={12} sm={6} md={4} lg={3} xl={2} sx={{ mb: 2, mx: 'auto' }}>
                        <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', mx: 'auto', '&:hover': { boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }, '&:active': { boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)' } }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', mt: 1 }}>
                                    by {book.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" onClick={logout} sx={{ mt: 2, mx: 'auto' }}>
                Logout
            </Button>
        </Grid>
    );
};

export default BookList;