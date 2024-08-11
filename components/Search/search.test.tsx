import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Search } from '.';
import { getMovieMock } from '@/utils/mock-handlers';
import { server } from '@/utils/mock-server';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());

const mockRouterPush = jest.fn();
const mockGetSearchParam = () => 'lion king';
jest.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: mockRouterPush,
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: mockGetSearchParam,
    }),
  };
});

const setupTest = () => {
  server.use(getMovieMock());
  render(<Search />);
};

describe('Search Component', () => {
  it('should set search params on submit form', async () => {
    setupTest();

    const form = screen.getByTestId('search-form');

    expect(form).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.submit(form);
    });

    expect(mockRouterPush).toHaveBeenCalledWith(
      `${window.location.pathname}?searchText=lion king`
    );
  });
});
