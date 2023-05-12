import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Options from './Options';
import Button from './Button';
import { addBooksToApi } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const HandleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const HandleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const HandlePurpose = (e) => {
    e.preventDefault();
    // const id = (books.length + 1);

    dispatch(addBooksToApi({
      item_id: `${Math.random()}`, title, author, category,
    }));
  };

  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book title" value={title} onChange={HandleTitleChange} required />
        <input type="text" placeholder="Author" value={author} onChange={HandleAuthorChange} required />
        <Options category={category} onCategoryChange={handleCategoryChange} />
        <Button text="Add book" purpose={HandlePurpose} />
      </form>
    </div>
  );
};

export default AddBook;
