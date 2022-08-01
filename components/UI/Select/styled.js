import styled from 'styled-components';

const SelectStyled = styled.select`
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px 10px 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: rgba(255, 255, 255, 0.1);
  border: none;

  @media ${(props) => props.theme.media.md} {
    width: 250px;
  }

  &:focus {
    outline: none;
  }
`;

const OptionStyled = styled.option`
  color: ${(props) => props.theme.colors.text};
  background-color: grey;

  &:first-child {
    color: #222;
  }
`;

export { SelectStyled, OptionStyled };
