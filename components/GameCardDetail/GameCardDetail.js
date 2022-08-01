import {
  GameCardDetailStyled,
  GameCardDetailTitle,
  GameCardDetailValue,
} from './styled';

const GameCardDetail = ({ title, value }) => {
  return (
    <GameCardDetailStyled>
      <GameCardDetailTitle>{title}</GameCardDetailTitle>
      <GameCardDetailValue>{value}</GameCardDetailValue>
    </GameCardDetailStyled>
  );
};

export default GameCardDetail;
