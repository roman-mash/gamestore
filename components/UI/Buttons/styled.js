import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: center;
  cursor: pointer;
`;

const SearchButtonStyled = styled(ButtonStyled)`
  background-image: url('/images/icons/search.svg');
`;

const CloseButtonStyled = styled(ButtonStyled)`
  position: absolute;
  right: 20px;
  top: 20px;
  background-image: url('/images/icons/close.svg');
`;

export { SearchButtonStyled, CloseButtonStyled };
