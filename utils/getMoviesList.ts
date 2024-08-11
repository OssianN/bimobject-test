import type { SearchResultListResponse } from '@/types';

export const getMoviesList = async (
  searchText: string
): Promise<SearchResultListResponse> => {
  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    throw new Error('Missing API key');
  }

  if (typeof searchText !== 'string') {
    throw new Error('body must be of type string');
  }

  const encodedSearch = encodeURIComponent(searchText);

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodedSearch}`
  );

  return await response.json();
};
