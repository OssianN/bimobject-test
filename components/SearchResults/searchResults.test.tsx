import { render, screen } from '@testing-library/react';
import { SearchResults } from '.';
import { movieResponseMock } from '@/__fixtures__/movieResponseMock';

const setupTest = () => {
  render(<SearchResults searchResults={movieResponseMock} />);
};

describe('Search Component', () => {
  it('should render the title', () => {
    setupTest();

    const title = screen.getByText(movieResponseMock.Title);

    expect(title).toBeInTheDocument();
  });

  it('should render the poster', () => {
    setupTest();

    const img = screen.getByTestId(movieResponseMock.Poster);

    expect(img).toBeInTheDocument();
  });

  it('should render the plot', () => {
    setupTest();

    const plot = screen.getByText(movieResponseMock.Plot);

    expect(plot).toBeInTheDocument();
  });
});
