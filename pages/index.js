import Filters from '../components/Filters/Filters';
import GamesList from '../components/GamesList/GamesList';
import Select from '../components/UI/Select/Select';
import { sortOptions } from '../constants/sort';
import Layout from '../layouts/Layout';
import { Container, MainPageMain, PageTitle } from '../styles/common';
import { fetchGames, fetchGamesSSR, fetchPlatforms } from '../API/games';
import { useState, useEffect, useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getPageCount } from '../lib/pages';
import { PAGE_SIZE } from '../constants/api';
import { useObserver } from '../hooks/useObserver';
import Loader from '../components/UI/Loader/Loader';

export default function Home({ gamesSSR, platforms }) {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState('');
  const [platform, setPlatform] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchSortedGames, isGamesLoading] = useFetch(
    async (pageParameter, sortParameter, platformParameter) => {
      const sortedGames = await fetchGames(
        pageParameter,
        sortParameter,
        platformParameter
      );
      setGames([...games, ...sortedGames.results]);
      const totalCount = sortedGames.count;
      setTotalPages(getPageCount(totalCount, PAGE_SIZE));
    }
  );

  useEffect(() => {
    setGames(gamesSSR);
  }, []);

  useEffect(() => {
    fetchSortedGames(page, sort, platform);
  }, [page, sort, platform]);

  useObserver(lastElement, page < totalPages, isGamesLoading, () => {
    setPage((prevPage) => prevPage + 1);
  });

  const sortHandler = (evt) => {
    setGames([]);
    setPage(0);
    setSort(evt.target.value);
  };

  const platformHandler = (evt) => {
    setGames([]);
    setPage(0);
    setPlatform(evt.target.value);
  };

  return (
    <Layout title="Home">
      <MainPageMain>
        <Container>
          <PageTitle>Choose your game!</PageTitle>
          <Filters>
            <Select
              sortOptions={sortOptions}
              title="Order by:"
              value={sort}
              onChange={sortHandler}
            />
            <Select
              sortOptions={platforms}
              title="Platforms:"
              value={platform}
              onChange={platformHandler}
            />
          </Filters>
          <GamesList items={games} refElement={lastElement}></GamesList>
          {isGamesLoading && <Loader />}
        </Container>
      </MainPageMain>
    </Layout>
  );
}

export async function getStaticProps() {
  const [gamesData, platformsData] = await Promise.all([
    fetchGamesSSR(),
    fetchPlatforms(),
  ]);
  return {
    props: {
      gamesSSR: gamesData.results,
      platforms: platformsData,
    },
  };
}
