import { PropTypes } from 'prop-types';
import Button from './Button';

const BookItem = ({
  genre, title, author, removeBook,item_id,
}) => (

  <div className="lesson-panel">
    <div>
      <p>{genre}</p>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className="meta">
        <button type="button">Comments</button>
        <Button text="Remove" purpose={removeBook} id={item_id} />
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
);
BookItem.propTypes = { genre: PropTypes.string.isRequired };
BookItem.propTypes = { title: PropTypes.string.isRequired };
BookItem.propTypes = { author: PropTypes.string.isRequired };
BookItem.propTypes = { removeBook: PropTypes.func.isRequired };
export default BookItem;
