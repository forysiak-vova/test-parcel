// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(SimpleLightbox);


// import { galleryItems } from './gallery-items';

// console.log(JSON.stringify(galleryItems));

// // Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const cardsMarkup = createImgCardsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// galleryContainer.addEventListener('click', ongalleryContainerClick);

// function createImgCardsMarkup(galleryItems) {
//    return galleryItems.map(({preview, original}) => {
   
//       return  `
//    <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="Image description"
//     />
//   </a>
// </div>
//    `
//    }).join('');
   
// }

// console.log(galleryItems);

// function ongalleryContainerClick(e) {
//    const isGalleryClass = e.target.classList.contains('.gallery__image');
//    if (!isGalleryClass) {
//       return;
//    }
//    console.log(e.target);
   
// };

// // const instance = basicLightbox.create(`
// // //     <img src=${original} width="800" height="600">
// // // `)

// // instance.show()


// const lightbox = new SimpleLightbox(".gallery a", {
//   captionSelector: "img", //Переключение на имидж
//   captionsData: "alt", //Получение текста из Алт
//   captionPosition: "bottom", //Подпись внизу
//   captionDelay: 250, //Задержка 250 мс
//   showCounter: false, //Счетчик выключен
//   scrollZoom: false, //Масштабирование скролом отключено
// });

const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


console.log(list);

const get = () => {
  return fetch('http://localhost:3000/posts').then(response => { return response.json()})
   
      // .then(data => list.insertAdjacentHTML('beforeend', data.reduce((acc, el) => (acc +=
      //    `<li>
      //    <p>${el.title}</p>
      //    <button>delete</button>
      // </li>`)), ''));
   // const render = res.reduce()
   
}
get().then(pererender);


function pererender(data) { 
   console.log(data);
   const newData = data.reduce((acc, data) => (acc +=
      `<li>
         <p>${data.title}</p>
         <button data-id=${data.id}>delete</button>
      </li>`), '');
   
   list.innerHTML = newData

   list.addEventListener('click', evt => { 
      if (evt.target.nodeName === 'BUTTON') { 
         console.log(evt.target.dataset.id);
         const id = evt.target.dataset.id;
         fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' })
            .then(res => { 
               if (res.status === 200) {
              const newData = data.reduce((acc, data) => (acc +=
      `<li>
         <p>${data.title}</p>
         <button data-id=${data.id}>delete</button>
      </li>`), '');
   
   list.innerHTML = newData
                }
            });

      }
   })
}






btn.addEventListener('click', onClickBtn);

 function onClickBtn() { 
 fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
     
      body: JSON.stringify({
         title: 'test2',
         author: 'stepan2'
      }),
 })
 
   // .then(response => response.json()).then(x => console.log(x.id))
}



