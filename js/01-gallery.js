import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) {
	return galleryItems.map(({preview, original, description}) => {
		return `
		 <div class="gallery__item">
				<a class="gallery__link" href="large-image.jpg">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
	 		</div> `
	}).join('');

};

galleryContainer.addEventListener('click', onClick);

function onClick(evt) {
	evt.preventDefault();

	if(evt.target.nodeName !== "IMG") {
		return
	} 

	const url = evt.target.dataset.source;
	const instance = basicLightbox.create(`<img src = ${url}>`);		
	instance.show();	 

	galleryContainer.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') {
			instance.close();
		}
	})
};

