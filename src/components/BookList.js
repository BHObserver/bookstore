import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <ul className="content">
      {books.map((book) => (
        <Book key={book.item_id} book={book} bookKey={book.item_id} />
      ))}
    </ul>
  );
};

export default BookList;
