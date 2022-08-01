import {
  GameCardDetails,
  GameCardImage,
  GameCardInfo,
  GameCardStyled,
  GameCardTitle,
} from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../lib/date';
import GameCardDetail from '../GameCardDetail/GameCardDetail';
import { getPlatforms } from '../../lib/platforms';

const GameCard = ({ game }) => {
  return (
    <Link href={`/game/${game.slug}`} key={game.id}>
      <GameCardStyled className="game-card">
        <GameCardImage>
          {game.background_image ? (
            <Image
              src={game.background_image}
              alt={game.name}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Image
              src="/images/noimage.png"
              alt={game.name}
              layout="fill"
              objectFit="cover"
            />
          )}
        </GameCardImage>
        <GameCardInfo>
          <GameCardTitle>{game?.name}</GameCardTitle>
          <GameCardDetails>
            <GameCardDetail title="Rating" value={game?.rating} />
            <GameCardDetail
              title="Released"
              value={formatDate(game?.released)}
            />
            <GameCardDetail
              title="Platforms"
              value={getPlatforms(game?.platforms)}
            />
          </GameCardDetails>
        </GameCardInfo>
      </GameCardStyled>
    </Link>
  );
};

export default GameCard;
