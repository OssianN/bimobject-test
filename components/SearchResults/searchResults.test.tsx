import { render, screen } from '@testing-library/react';
import { SearchResults } from '.';
import { moviesResponseMock } from '@/__fixtures__/movieResponseMock';

const setupTest = () => {
  render(<SearchResults searchResults={moviesResponseMock} />);
};

describe('Search Component', () => {
  it('should render the title', () => {
    setupTest();

    moviesResponseMock.Search.forEach(movie => {
      const title = screen.getByText(movie.Title);
      expect(title).toBeInTheDocument();
    });
  });

  it('should render the poster', () => {
    setupTest();

    moviesResponseMock.Search.forEach(movie => {
      const img = screen.getByTestId(movie.Poster);
      expect(img).toBeInTheDocument();
    });
  });
});
