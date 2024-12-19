import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(`${process.env.SERVER_URL}/api/books`);            
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const addBook = async (book) => {
        await axios.post(`${process.env.SERVER_URL}/api/books`, book);
        fetchBooks(); // Refresh the book list
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <BookContext.Provider value={{ books, addBook }}>
            {children}
        </BookContext.Provider>
    );
};
