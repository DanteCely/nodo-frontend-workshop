import urls from './urls.json';

export const getLevels = async () => {
  const response = await fetch(urls.levels.url);
  const data = await response.json();

  return data;
};

export const setScores = async () => {};

export const getScores = async () => {};
