import styled from 'styled-components';

const GamesListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px -10px -20px;
`;

const GameWrap = styled.div`
  padding: 0 10px 20px;
  width: 100%;
  @media ${(props) => props.theme.media.sm} {
    width: 50%;
  }
  @media ${(props) => props.theme.media.lg} {
    width: calc(100% / 3);
  }
  @media ${(props) => props.theme.media.xxl} {
    width: 25%;
  }
`;

export { GamesListStyled, GameWrap };
