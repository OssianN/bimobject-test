import type { SearchResultResponse } from '@/types';
import { MovieInformation } from './MovieInformation';
import { MoviePoster } from './MoviePoster';

type SearchResultsProps = {
  searchResults?: SearchResultResponse;
};

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  if (!searchResults) return null;

  return (
    <article className="flex flex-col items-center gap-12">
      <MoviePoster searchResults={searchResults} />
      <MovieInformation searchResults={searchResults} />
    </article>
  );
};
