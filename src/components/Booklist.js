import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import { deleteBooksFromApi } from '../redux/books/bookSlice';

const Booklist = () => {
  const { books } = useSelector((store) => store.books) || [];
  // console.log(books[1]);
  const dispatch = useDispatch();
  // console.log(books[1]);

  const handleRemove = (itemId) => {
    dispatch(deleteBooksFromApi(itemId));
    // console.log(typeof itemId);
  };
  if (books && books.length > 0) {
    return (
      <>
        {books.map((item) => (
          <BookItem
            key={item.id}
            genre={item.book.category}
            title={item.book.title}
            author={item.book.author}
            removeBook={() => handleRemove(item.id)}
            itemId={item.item_id}
          />
          // console.log(item.book.category)

        ))}
      </>
    );
  }
  return <p>No books found.</p>;
};
export default Booklist;
