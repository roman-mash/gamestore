import styled from 'styled-components';

const SearchInputStyled = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.text};
  background-color: rgba(255, 255, 255, 0.1);
  border: none;

  &:focus {
    outline: none;
  }
`;

export { SearchInputStyled };
