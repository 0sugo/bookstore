import Options from './Options';
import { useDispatch } from 'react';

const AddBook = () => {
  const Dispatch = useDispatch();
  (
  <div className="add-book">
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" placeholder="Book title" required />
      <Options />
      <button type="submit" className="book-adder">ADD BOOK</button>
    </form>
  </div>
)};

export default AddBook;
