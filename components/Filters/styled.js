import styled from 'styled-components';

const FiltersStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${(props) => props.theme.media.sm} {
    flex-direction: row;
  }
`;

export { FiltersStyled };
