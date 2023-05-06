const Home = () => (
  <container>
    <div className="lesson-panel">
      <div>
        <p>Action</p>
        <h1>THE HUNGER GAMES</h1>
        <p>Suzanne Collins</p>
        <div className="meta">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>

      </div>
      <div className="progress">
        <svg className="progress-circle" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="progress-circle-back"
            cx="111"
            cy="100"
            r="44"
          />
          <circle
            className="progress-circle-prog"
            cx="111"
            cy="100"
            r="44"
          />
        </svg>
        <div className="percentage-complete">
          <h1 className="percent">64%</h1>
          <p className="state">Completed</p>
        </div>
      </div>
      <div className="currently">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
    <div className="Line" />

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
  </container>
);

export default Home;
