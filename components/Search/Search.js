import { useEffect, useState } from 'react';
import { fetchSearch } from '../../API/games';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import CloseButton from '../UI/Buttons/CloseButton';
import SearchInput from '../UI/SearchInput/SearchInput';
import SearchResults from './SearchResults';
import { SearchContent, SearchForm, SearchWindow } from './styled';

const Search = ({ isVisible, setIsVisible }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debounced = useDebounce(searchQuery, 500);

  const [fetchSearchResults] = useFetch(async (string) => {
    const searchedResult = await fetchSearch(string);
    setSearchResults(searchedResult.results);
  });

  useEffect(() => {
    if (debounced.length >= 3) {
      fetchSearchResults(debounced);
    }
  }, [debounced]);

  const changeHandler = (evt) => {
    setSearchQuery(evt.target.value);
  };

  const updateSearchHandler = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsVisible(false);
  };

  return (
    <SearchWindow
      className={isVisible ? 'active' : ''}
      onClick={updateSearchHandler}
    >
      <SearchContent onClick={(evt) => evt.stopPropagation()}>
        <CloseButton onClick={updateSearchHandler} />
        <SearchForm>
          <SearchInput value={searchQuery} onChange={changeHandler} />
          <SearchResults
            results={searchResults}
            onOptionSelected={updateSearchHandler}
          />
        </SearchForm>
      </SearchContent>
    </SearchWindow>
  );
};

export default Search;
