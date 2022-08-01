import styled from 'styled-components';

const Container = styled.div`
  max-width: 1920px;
  padding: 0 20px;
  margin: 0 auto;
`;
const MainPageMain = styled.main`
  padding: 120px 0 50px;
`;
const GamePageMain = styled.main`
  padding: 0 0 0;
`;
const PageTitle = styled.h1`
  margin-bottom: 1em;
  font-size: 26px;
  line-height: 120%;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  @media ${(props) => props.theme.media.lg} {
    font-size: 36px;
  }
  @media ${(props) => props.theme.media.xxl} {
    font-size: 50px;
  }
`;

export { Container, MainPageMain, GamePageMain, PageTitle };
