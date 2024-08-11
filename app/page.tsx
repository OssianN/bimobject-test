import { Search } from '@/components/Search';
import { getMovies } from '@/utils/getMovie';

type HomeProps = {
  searchParams: { searchText?: string };
};
const Home = async ({ searchParams: { searchText } }: HomeProps) => {
  const searchResult = searchText ? await getMovies(searchText) : undefined;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <Search serverSearchResult={searchResult} />
    </main>
  );
};

export default Home;
