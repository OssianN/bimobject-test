import { getMovies } from '@/utils/getMovie';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const data = await getMovies(body?.searchText);

    if (data.Error) {
      return Response.json({ error: data.Error });
    }

    return Response.json({ result: data });
  } catch (error) {
    return Response.json({ error });
  }
};
