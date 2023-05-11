import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import { removeBook } from '../redux/books/bookSlice';

const Booklist = () => {
  const { books } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <>
      {books.map((item) => (
        <BookItem
          key={item.item_id}
          genre={item.category}
          title={item.title}
          author={item.author}
          removeBook={handleRemove}
          itemId={item.item_id}
        />
      ))}
    </>
  );
};
export default Booklist;
