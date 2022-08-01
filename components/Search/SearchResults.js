import Link from 'next/link';
import {
  NoSearchResult,
  SearchResultsStyled,
  SearchResultStyled,
} from './styled';

const SearchResults = ({ results, onOptionSelected }) => {
  if (results.length === 0) {
    return <NoSearchResult>No results!</NoSearchResult>;
  }
  return (
    <SearchResultsStyled>
      {results.map((result) => (
        <li key={result.id}>
          <Link href={`/game/${result.slug}`}>
            <SearchResultStyled onClick={onOptionSelected}>
              {result.name}
            </SearchResultStyled>
          </Link>
        </li>
      ))}
    </SearchResultsStyled>
  );
};

export default SearchResults;
