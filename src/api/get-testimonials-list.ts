import axios from 'axios';

export async function getTestimonialsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return axios
    .get('https://hotels4.p.rapidapi.com/reviews/v2/list', options)
    .then((res) => {
      return res.data;
    });
}

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/reviews/v2/list',
  params: {
    hotelId: '1053457920',
    reviewOrder: 'date_newest_first',
    tripTypeFilter: 'all',
  },
  headers: {
    'x-rapidapi-key': '9a9097fdaemsha871f397ab9ba2fp14e8fajsn8a1420f2cce0',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
  },
};
