import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '49723808-114337464bd6e566bb6cace9e';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 50,
    },
  })
    .then(response => {
      if (!response.data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      return response.data;
    })
    .catch(error => {
      iziToast.error({
        message: 'Sorry, something went wrong.',
        position: 'center',
      });
    });
}
