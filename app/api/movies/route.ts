//

import { SearchResultResponse } from '@/types';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    return Response.json({ error: 'Missing API key' });
  }

  if (typeof body?.searchText !== 'string') {
    return Response.json({ error: 'body must be of type string' });
  }

  const encodedSearch = encodeURIComponent(body?.searchText);

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodedSearch}&plot=full`
  );

  const data: SearchResultResponse = await response.json();
  console.log(data);

  return Response.json(data);
};
