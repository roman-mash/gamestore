import Image from 'next/image';
import Link from 'next/link';
import { fetchGamesBySlug, fetchScreenshotsBySlug } from '../../API/games';
import Slider from '../../components/Slider/Slider';
import Layout from '../../layouts/Layout';
import { formatDate } from '../../lib/date';
import { Container, GamePageMain } from '../../styles/common';
import {
  BackLink,
  GameData,
  GameDescription,
  GameDetail,
  GameDetailLink,
  GameDetailTitle,
  GameDetailValue,
  GameHeader,
  GameHeaderEmpty,
  GameHeaderWrapper,
  GameInfo,
  GameTitle,
} from '../../styles/GamePage';

const Game = ({ gameData, screenshots }) => {
  console.log(screenshots);
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
              <GameDetail>
                <GameDetailTitle>Released</GameDetailTitle>
                <GameDetailValue>
                  {formatDate(gameData.released)}
                </GameDetailValue>
              </GameDetail>
              <GameDetail>
                <GameDetailTitle>Rating</GameDetailTitle>
                <GameDetailValue>{gameData.rating}</GameDetailValue>
              </GameDetail>
              <GameDetail>
                <GameDetailTitle>Website</GameDetailTitle>
                <GameDetailLink href={gameData?.website}>
                  Click to visit
                </GameDetailLink>
              </GameDetail>
            </GameInfo>
            <GameDescription
              dangerouslySetInnerHTML={{ __html: gameData?.description }}
            ></GameDescription>
          </GameData>
          {gameData?.screnshots_count}
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
