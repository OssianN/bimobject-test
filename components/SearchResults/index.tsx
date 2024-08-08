import type { SearchResultResponse } from '@/types';
import Image from 'next/image';

type SearchResultsProps = {
  searchResults: SearchResultResponse | null;
};

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {searchResults?.Poster && (
        <Image
          src={searchResults?.Poster}
          width={200}
          height={400}
          alt="movie poster"
        />
      )}

      <div>
        <h2 className="text-lg font-bold">{searchResults?.Title}</h2>
        <p>{searchResults?.Plot}</p>
      </div>
    </div>
  );
};
