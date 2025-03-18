import { http, HttpResponse } from 'msw';

export const getHotelsListMockRes = http.get('https://hotels4.p.rapidapi.com/properties/list', () => {
  console.log('capture!');
  return HttpResponse.json({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  });
});
