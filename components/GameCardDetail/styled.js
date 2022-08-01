import styled from 'styled-components';

const GameCardDetailStyled = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
const GameCardDetailTitle = styled.span`
  font-size: 14px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
`;
const GameCardDetailValue = styled.span`
  font-size: 14px;
  line-height: 120%;
  font-weight: 600;
  text-align: right;
  color: ${(props) => props.theme.colors.text};
`;

export { GameCardDetailStyled, GameCardDetailTitle, GameCardDetailValue };
