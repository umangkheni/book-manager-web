import { Box, Button, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author });
        setTitle('');
        setAuthor('');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2, color: 'black' }}>
                Add a New Book
            </Typography>
            <form onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    sx={{ mb: 2, width: '100%' }}
                />
                <TextField
                    label="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    sx={{ mb: 2, width: '100%' }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ width: '100%', mt: 2 }}>
                    Add Book
                </Button>
            </form>
        </Box>
    );
};

export default BookForm;