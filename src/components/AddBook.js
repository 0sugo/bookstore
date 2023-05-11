import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Options from './Options';
import Button from './Button';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { books } = useSelector((store) => store.counter);

  const HandleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const HandleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const HandlePurpose = (e) => {
    e.preventDefault();
    const id = (books.length + 1);

    dispatch(addBook({
      item_id: `item${id}`, title, author, category: 'fiction',
    }));
  };
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book title" value={title} onChange={HandleTitleChange} required />
        <input type="text" placeholder="Author" value={author} onChange={HandleAuthorChange} required />
        <Options />
        <Button text="Add book" purpose={HandlePurpose} />
      </form>
    </div>
  );
};

export default AddBook;
