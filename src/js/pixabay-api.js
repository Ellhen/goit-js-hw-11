import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54277824-efa85ad242bfacaecdcb3057f';
const pageSize = 21;

export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        per_page: pageSize, 
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};
