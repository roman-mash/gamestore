import styled from 'styled-components';

const SearchWindow = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s linear;
  &.active {
    opacity: 1;
    pointer-events: all;
  }

  @media ${(props) => props.theme.media.md} {
    padding: 40px;
  }
`;

const SearchContent = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  background-color: #222;
  padding: 80px 30px 50px;
  @media ${(props) => props.theme.media.md} {
    height: auto;
  }
`;

const SearchForm = styled.form`
  width: 100%;
`;

const SearchResultsStyled = styled.ul`
  padding: 0;
  margin: 30px 0 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SearchResultStyled = styled.a`
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

const NoSearchResult = styled.p`
  margin: 30px 0 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export {
  SearchWindow,
  SearchContent,
  SearchForm,
  SearchResultsStyled,
  SearchResultStyled,
  NoSearchResult,
};
