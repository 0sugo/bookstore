import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const Booklist = () => {
  const { books } = useSelector((store) => store.counter);
  return (
    <>
      { books.map((item) => (
        <BookItem
          key={item.item_id}
          genre={item.category}
          title={item.title}
          author={item.author}
        />
      ))}
    </>
  );
};
export default Booklist;
