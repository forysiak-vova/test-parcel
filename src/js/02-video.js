// console.log(localStorage);
// localStorage.setItem('my-data', 'qweqweqwe');
// console.log(localStorage.getItem('my-data'));
import common from '../css/common.css';
import car from '../css/car.css'
import axios from 'axios';
import 'regenerator-runtime/runtime'
import { async } from 'regenerator-runtime';
import { Api } from '../servises/api.js';
const servises = new Api();

// const logMessage = () => {
//    console.log('Лог при визове функції через 3 сек');
// };
// console.log('До визова функції setTimeout');

// setTimeout((x,y) => {
//    console.log('всередині колбек для setTimeout');
//    console.log(x,y);
// }, 2000, 5, 50)
//       console.log('После визова функції setTimeout');
//  ===================================== setTimeout and clearTimeout  ================================
// const logger = time => {
//    console.log(`log через ${time} ms, тому що не відмінили таймаут`);
// };
// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);
// const showldChennelTimer = Math.random() > 0.3;
// console.log(showldChennelTimer);

// if (showldChennelTimer) {
//    clearTimeout(timerId);
//  };

// ==================================== setInterval ====================================================
// const logger = time => {
//    console.log(`визов функції через інтервал ${time} ms`);
// };
// const intervalId = setInterval(logger, 2000, 2000);

// const resOftrueFalse = Math.random() > 0.3;
// console.log(resOftrueFalse);
// if (resOftrueFalse) {
//    clearInterval(intervalId);
// }
// let total = 0;
// const timeId = setInterval(() => {
//    if (total === 3) {
//        console.log('видали');
//       clearInterval(timeId);
//       return;
//    }
//      console.log('hello');
//    total += 1;
 
// }, 1000);

// fetch('https://restcountries.com/v3.1/name/peru')
//    .then(response => {
//       console.log(response);
      
//    })





const gallery = document.querySelector('.gallery');
const form = document.getElementById('search-form');
const divEl = document.querySelector('.divEl');
const btn = document.querySelector('.load-more');

// async function getUser(name) {
  
//     const response = await axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
//       params: {
//        q: `${name}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: 1,
//         per_page: 40,  
//       },
//     });
//   console.log(response);
//     const resOfRespons = response.data.hits;
//   console.log(resOfRespons);
   
    
//      if (resOfRespons.length === 0) {
//         Notiflix.Notify.failure('Oops, there is no country with that name')
//      }
//      return resOfRespons;
// };


   
// async function renderImage(img) {
   
//   try {
//     const data = await getUser({img});
//     console.log('data',data)
    
    
//         gallery.innerHTML = res;
     
//   } catch (error) {
//     console.log(error);
//   }
  
//  imageOfLightbox();
// }

// let getValue;
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();
  const  getValue = e.currentTarget.elements.searchQuery.value;
  console.log(getValue);
  servises.saveValue(getValue);
   
   
   getUser(getValue).then(response => console.log(response))
   
  form.reset();
  cliarePage();
  // servises.nextPage();
  
}
function cliarePage() {
  divEl.innerHTML = '';
 }

// ===========================================

async function getUser(name, page = 1) {
 
    const response = await axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
      params: {
       q: `${name}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: `${page}`,
        per_page: 40,  
      },
    });
  console.log(response);
    const resOfRespons = response.data.hits;
  console.log(resOfRespons);
  renderImage(resOfRespons);
  return resOfRespons;
   // return resOfRespons;
    
   //   if (resOfRespons.length === 0) {
   //      Notiflix.Notify.failure('Oops, there is no country with that name')
   //   }
     
  
 
 
   //  Notiflix.Notify.failure('Oops, there is no country with that name')
 
   //   imageOfLightbox();

};


btn.addEventListener('click', onAddPage);

function onAddPage() {
  console.log(servises.getValue());
  const convejValue = servises.getValue();
  servises.savePage();
 
  getUser(convejValue, servises.getPage())
    .then(img => {
    console.log(img);
    const resImg = img.reduce((acc, el) => (acc += `
<div class="photo-card">
<a href="${el.largeImageURL}">
  <img src=${el.webformatURL} alt=${el.tags} loading="lazy" width="250" height = "180" class = "image"/>
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${el.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${el.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${el.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${el.downloads}</b>
    </p>
  </div>
</div>

    `), '')
    divEl.insertAdjacentHTML('beforeend', resImg);
      // divEl.innerHTML = resImg;
  })
 }

  function renderImage(data) {
   //   getUser().then(response => console.log(response))
    
    const res = data.reduce((acc, el) => (acc += `
<div class="photo-card">
<a href="${el.largeImageURL}">
  <img src=${el.webformatURL} alt=${el.tags} loading="lazy" width="250" height = "180" class = "image"/>
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${el.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${el.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${el.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${el.downloads}</b>
    </p>
  </div>
</div>

    `), '')
    
    gallery.innerHTML = res;
    
}

// renderImage();


// =============================================


