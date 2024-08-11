import { motion } from 'framer-motion';
import { getDefaultAnimation } from '@/lib/utils';
import type { SearchResultResponse } from '@/types';

type MovieInformationProps = {
  searchResults: SearchResultResponse;
};

export const MovieInformation = ({ searchResults }: MovieInformationProps) => {
  return (
    <motion.div
      key={`plot ${searchResults?.imdbID}`}
      {...getDefaultAnimation(0.3)}
      className="flex flex-col gap-4"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">{searchResults?.Title}</h2>
        {searchResults?.Ratings?.map(rating => (
          <p key={rating.Source}>
            <span>{rating.Source}</span> <span>{rating.Value}</span>
          </p>
        ))}
      </header>

      <p className="opacity-80">{searchResults?.Plot}</p>
    </motion.div>
  );
};
