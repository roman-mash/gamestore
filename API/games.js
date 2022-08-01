import { API_KEY, API_URL, PAGE_SIZE } from '../constants/api';

export const fetchGamesSSR = async () => {
  const res = await fetch(
    `${API_URL}/games?key=${API_KEY}&page=1&page_size=${PAGE_SIZE}`
  );
  const data = await res.json();
  return data;
};

export const fetchGames = async (page, order = '', platform = '') => {
  if (page <= 0) return;
  let res;
  if (platform) {
    res = await fetch(
      `${API_URL}/games?key=${API_KEY}&page=${page}&page_size=${PAGE_SIZE}&ordering=${order}&platforms=${platform}`
    );
  } else {
    res = await fetch(
      `${API_URL}/games?key=${API_KEY}&page=${page}&page_size=${PAGE_SIZE}&ordering=${order}`
    );
  }

  const data = await res.json();
  return data;
};

export const fetchPlatforms = async () => {
  const res = await fetch(`${API_URL}/platforms?key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchGamesBySlug = async (slug) => {
  const res = await fetch(`${API_URL}/games/${slug}?key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const fetchScreenshotsBySlug = async (slug) => {
  const res = await fetch(
    `${API_URL}/games/${slug}/screenshots?key=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const fetchSearch = async (string) => {
  const res = await fetch(
    `${API_URL}/games?key=${API_KEY}&page=1&page_size=5&search=${string}`
  );
  const data = await res.json();
  return data;
};
