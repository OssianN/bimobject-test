import { movieResponseMock } from '@/__fixtures__/movieResponseMock';
import { http, HttpResponse } from 'msw';

export const getMovieMock = (responseStatus: number = 200) =>
  http.post('/api/movies', () => {
    return responseStatus === 200
      ? HttpResponse.json(movieResponseMock)
      : new HttpResponse(null, {
          status: responseStatus,
        });
  });
