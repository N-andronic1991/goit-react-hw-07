import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilters } from '../../redux/contactsSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name:
        <input
          className={css.searchInput}
          type="text"
          name="nameSearch"
          value={filters}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
export default SearchBox;
