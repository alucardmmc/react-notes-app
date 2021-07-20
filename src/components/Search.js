import { MdSearch } from 'react-icons/md';
import classes from './Search.module.css';

const Search = ({ handleSearchNote }) => {
  const handleInputChange = (event) => {
    handleSearchNote(event.target.value);
  };

  return (
    <div className={classes['search']}>
      <MdSearch className={classes['search__icon']} size='1.3em' />
      <input
        className={classes['search__input']}
        type='text'
        placeholder='type to search...'
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
