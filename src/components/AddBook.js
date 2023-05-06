const AddBook = () => (
  <div className="add-book">
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" placeholder="Book title" required />
      <select placeholder="Category">
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <button type="submit" className="book-adder">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
