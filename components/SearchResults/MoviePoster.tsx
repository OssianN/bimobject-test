import { motion } from 'framer-motion';
import Image from 'next/image';
import { getDefaultAnimation, parseUrl } from '@/lib/utils';
import type { SearchResultResponse } from '@/types';

type MoviePosterProps = {
  searchResults: SearchResultResponse;
};

export const MoviePoster = ({ searchResults }: MoviePosterProps) => (
  <>
    {parseUrl(searchResults.Poster) && (
      <motion.div
        key={`image ${searchResults.imdbID}`}
        {...getDefaultAnimation(0)}
        className="relative"
      >
        <Image
          src={searchResults.Poster}
          data-testid={searchResults.Poster}
          width={200}
          height={400}
          alt="movie poster"
          className="shadow-3xl rounded-sm"
        />
        <div className="blur-3xl absolute -top-40 -left-10 -z-20 -skew-x-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="bg-linear-gradient w-[400px] h-[400px] rounded-full"
          />
        </div>
      </motion.div>
    )}
  </>
);
