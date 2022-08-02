import styled from 'styled-components';

const GameDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameDetailTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.5;
  color: ${(props) => props.theme.colors.text};
`;

const GameDetailValue = styled.span`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

const GameDetailLink = styled.a`
  cursor: pointer;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text};
`;

export { GameDetailStyled, GameDetailTitle, GameDetailValue, GameDetailLink };
