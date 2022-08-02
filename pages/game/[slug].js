import Link from 'next/link';
import { fetchGamesBySlug, fetchScreenshotsBySlug } from '../../API/games';
import GameDetail from '../../components/GameDetail/GameDetail';
import Slider from '../../components/Slider/Slider';
import Layout from '../../layouts/Layout';
import { formatDate } from '../../lib/date';
import { Container, GamePageMain } from '../../styles/common';
import {
  BackLink,
  GameData,
  GameDescription,
  GameHeader,
  GameHeaderEmpty,
  GameHeaderWrapper,
  GameInfo,
  GameTitle,
} from '../../styles/GamePage';

const Game = ({ gameData, screenshots }) => {
  return (
    <Layout title={gameData.name}>
      <GamePageMain>
        {gameData.background_image ? (
          <GameHeader
            style={{ backgroundImage: `url(${gameData.background_image})` }}
          >
            <GameHeaderWrapper>
              <Link href="/">
                <BackLink>Back to home</BackLink>
              </Link>
              <GameTitle>{gameData.name}</GameTitle>
            </GameHeaderWrapper>
          </GameHeader>
        ) : (
          <GameHeaderEmpty>
            <GameHeaderWrapper>
              <Link href="/">
                <BackLink>Back to home</BackLink>
              </Link>
              <GameTitle>{gameData.name}</GameTitle>
            </GameHeaderWrapper>
          </GameHeaderEmpty>
        )}
        <Container>
          <GameData>
            <GameInfo>
              <GameDetail
                title="Released"
                value={formatDate(gameData.released)}
              />
              <GameDetail title="Rating" value={gameData.rating} />
              <GameDetail
                title="Website"
                value={gameData?.website}
                detailType="link"
              />
            </GameInfo>
            <GameDescription
              dangerouslySetInnerHTML={{ __html: gameData?.description }}
            ></GameDescription>
          </GameData>
        </Container>
        {screenshots.length ? <Slider items={screenshots} /> : ''}
      </GamePageMain>
    </Layout>
  );
};

export default Game;

export async function getServerSideProps({ params }) {
  const [gameData, screenshots] = await Promise.all([
    fetchGamesBySlug(params.slug),
    fetchScreenshotsBySlug(params.slug),
  ]);
  return {
    props: {
      gameData,
      screenshots: screenshots.results,
    },
  };
}
