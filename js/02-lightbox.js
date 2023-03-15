import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// пошук галереї
const gallery = document.querySelector(".gallery");
const CardMarkup = createImgCardMarkup(galleryItems);
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
gallery.insertAdjacentHTML("beforeend", CardMarkup);

// передача параметрів в функцію
console.log(createImgCardMarkup(galleryItems));

function createImgCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" title = "${description}" alt="${description}" />
        </a>`;
    })
    .join("");
}
// додавання затримки для опису, зображення
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
