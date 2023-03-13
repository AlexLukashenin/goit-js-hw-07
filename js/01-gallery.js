import { galleryItems } from "./gallery-items.js";

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
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  //перевірка кліку на картинку
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const img = event.target.getAttribute("data-source");

  const modal = basicLightbox.create(`
    <img src="${img}">
    `);
  modal.show();
  //закриття модального вікна після натискання клавіші Escape
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.close();
    }
  });
});
