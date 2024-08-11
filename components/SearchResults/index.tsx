import type { SearchResultListResponse } from '@/types';
import { MovieInformation } from './MovieInformation';
import { MoviePoster } from './MoviePoster';
import { motion } from 'framer-motion';
import { getDefaultAnimation } from '@/lib/utils';
import Link from 'next/link';

type SearchResultsProps = {
  searchResults?: SearchResultListResponse;
};

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  if (!searchResults) return null;

  return (
    <ul className="flex flex-col gap-8 w-full">
      {searchResults.Search.map((movie, i) => {
        const animationDelay = i * 0.3;
        return (
          <li key={movie.imdbID}>
            <Link
              href={`/${movie.imdbID}`}
              className="flex items-center gap-12"
            >
              <MoviePoster
                Poster={movie.Poster}
                id={movie.imdbID}
                animationDelay={animationDelay}
              />
              <motion.div
                className="flex-1"
                {...getDefaultAnimation(animationDelay)}
              >
                <h2 className="text-2xl">{movie.Title}</h2>
                <p className="font-extralight">{movie.Year}</p>
              </motion.div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
