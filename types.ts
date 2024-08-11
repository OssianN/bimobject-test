import { z } from 'zod';

export const formSchema = z.object({
  searchInput: z.string().min(2).max(50),
});

export type FormType = z.infer<typeof formSchema>;

type SearchResultRating = {
  Source: string;
  Value: string;
};

export type SearchResultResponse = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: SearchResultRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error?: string;
};
