import { Search } from '@/components/Search';
import { getMoviesList } from '@/utils/getMoviesList';

type HomeProps = {
  searchParams: { searchText?: string };
};
const Home = async ({ searchParams: { searchText } }: HomeProps) => {
  const searchResult = searchText ? await getMoviesList(searchText) : undefined;

  return (
    <main className="flex min-h-screen flex-col items-center max-w-search-width mx-auto">
      <Search serverSearchResult={searchResult} />
    </main>
  );
};

export default Home;
