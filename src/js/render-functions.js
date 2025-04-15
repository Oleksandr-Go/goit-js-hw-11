import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class='gallery-container'>
        <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class='gallery-min-div'> 
     <div class='div-text'>
       <p class="gallery-text">likes ${likes}</p>
     </div>
     <div class='div-text'>
       <p class="gallery-text">views ${views}</p>
     </div>
     <div class='div-text'>
       <p class="gallery-text">comments ${comments}</p>
     </div>
     <div class='div-text'>
       <p class="gallery-text">downloads ${downloads}</p>
     </div>
   </div>
  </li>
</div>
`
    )
    .join('');

  const simpleLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });

  simpleLightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
