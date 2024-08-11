'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getDefaultAnimation, parseUrl } from '@/lib/utils';

type MoviePosterProps = {
  Poster: string;
  id: string;
  animationDelay?: number;
};

export const MoviePoster = ({
  Poster,
  id,
  animationDelay,
}: MoviePosterProps) => (
  <>
    {parseUrl(Poster) && (
      <motion.div
        key={`image ${id}`}
        {...getDefaultAnimation(animationDelay ?? 0)}
        className="relative"
      >
        <Image
          src={Poster}
          data-testid={Poster}
          width={200}
          height={400}
          alt="movie poster"
          className="shadow-3xl rounded-sm w-48 flex-1"
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
