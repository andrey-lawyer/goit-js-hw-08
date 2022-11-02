// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Дополнительный импорт стилей
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';

const galaryEl = document.querySelector('.gallery');
const arrayImages = galleryItems
  .map(
    itemImag =>
      `
     
  <a class="gallery__item" href="${itemImag.original}">
  <img class="gallery__image"
  src="${itemImag.preview}" 
  alt="${itemImag.description}"
  />
  </a>
  
  `
  )
  .join('');
galaryEl.insertAdjacentHTML('afterbegin', arrayImages);

new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
  navText: ['\u261A', '\u261B'],
  showCounter: false,
  closeText: '\u2A37',
});
