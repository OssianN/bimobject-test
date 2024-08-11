import { BackButton } from '@/components/BackButton';
import { MovieInformation } from '@/components/SearchResults/MovieInformation';
import { MoviePoster } from '@/components/SearchResults/MoviePoster';
import { getMovieDetails } from '@/utils/getMovieDetails';

const MovieDetails = async ({ params }: { params: { movieId: string } }) => {
  const searchResult = await getMovieDetails(params.movieId);

  return (
    <>
      <BackButton />
      <article
        className="flex flex-col items-center gap-12 max-w-search-width mx-auto"
        key={searchResult.imdbID}
      >
        <MoviePoster Poster={searchResult.Poster} id={searchResult.imdbID} />
        <MovieInformation searchResults={searchResult} />
      </article>
    </>
  );
};

export default MovieDetails;
