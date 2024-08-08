import type { SearchResultResponse } from '@/types';

export const getMovies = async (
  searchText: string
): Promise<SearchResultResponse> => {
  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    throw new Error('Missing API key');
  }

  if (typeof searchText !== 'string') {
    throw new Error('body must be of type string');
  }

  const encodedSearch = encodeURIComponent(searchText);

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodedSearch}&plot=full`
  );

  return await response.json();
};
