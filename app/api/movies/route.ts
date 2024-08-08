import { getMovies } from '@/utils/getMovie';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const data = await getMovies(body?.searchText);

  return Response.json(data);
};
