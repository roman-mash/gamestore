import GameCard from '../GameCard/GameCard';
import { GamesListStyled, GameWrap } from './styled';

const GamesList = ({ items, refElement }) => {
  return (
    <GamesListStyled>
      {items.map((game) => (
        <GameWrap key={game.id}>
          <GameCard game={game} />
        </GameWrap>
      ))}
      <div ref={refElement}></div>
    </GamesListStyled>
  );
};

export default GamesList;
