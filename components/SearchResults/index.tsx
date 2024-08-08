import { motion } from 'framer-motion';
import Image from 'next/image';
import type { SearchResultResponse } from '@/types';

type SearchResultsProps = {
  searchResults: SearchResultResponse | null;
};

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  return (
    <div className="flex flex-col items-center gap-8">
      {searchResults?.Poster && (
        <motion.div
          key={`image ${searchResults?.imdbID}`}
          {...getDefaultAnimation(0)}
        >
          <Image
            src={searchResults?.Poster}
            width={200}
            height={400}
            alt="movie poster"
          />
        </motion.div>
      )}

      <motion.div
        key={`plot ${searchResults?.imdbID}`}
        {...getDefaultAnimation(0.3)}
        className="flex flex-col gap-4"
      >
        <h2 className="text-lg font-bold">{searchResults?.Title}</h2>
        <p>{searchResults?.Plot}</p>
      </motion.div>
    </div>
  );
};

const getDefaultAnimation = (delay: number) => ({
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay },
});
