import { getMoviesList } from '@/utils/getMoviesList';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const data = await getMoviesList(body?.searchText);

    return Response.json({ result: data });
  } catch (error) {
    return Response.json({ error });
  }
};
