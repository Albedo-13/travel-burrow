import axios from 'axios';

export async function getHotelsList() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return axios
    .get('https://hotels4.p.rapidapi.com/properties/list', options)
    .then((res) => {
      console.log(res.data);
    })
    .then((res) => {
      return res;
    });
}

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/list',
  params: {
    destinationId: '1506246',
    pageNumber: '1',
    pageSize: '25',
    adults1: '1',
    sortOrder: 'PRICE',
    locale: 'en_US',
    currency: 'USD',
  },
  headers: {
    'x-rapidapi-key': '9a9097fdaemsha871f397ab9ba2fp14e8fajsn8a1420f2cce0',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
  },
};
