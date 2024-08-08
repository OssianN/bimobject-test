import { Search } from '@/components/Search';
import { getMovies } from '@/utils/getMovie';

type HomeProps = {
  searchParams: { searchText: string };
};
const Home = async ({ searchParams: { searchText } }: HomeProps) => {
  try {
    const searchResult = await getMovies(searchText);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Search serverSearchResult={searchResult} />
      </main>
    );
  } catch {}
};

export default Home;
