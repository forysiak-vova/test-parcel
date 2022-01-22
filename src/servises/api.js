// import axios from 'axios';
// export class Api {
   
//    constructor() {
//       this.page = 1;
//       this.searchValue = '';
//    }

//    getValue() {
//       return this.searchValue;
//    }
   
//    saveValue(value) {
//       if (this.searchValue !== value) {
//          this.page = 1;
//        }
//       this.searchValue = value;
       
//    }
   

//    getPage() {
//       return this.page;
//    }
   
//    savePage() {
//       this.page = this.page + 1;
//    }
//    nextPage() {
    
//    }
//    async getUser(name, page = 1) {
 
//     const response = await axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
//       params: {
//        q: `${name}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: `${page}`,
//         per_page: 40,
//       },
//     });
//   console.log(response);
//     const resOfRespons = response.data.hits;
//   console.log(resOfRespons);
//   renderImage(resOfRespons);
//   return resOfRespons;
   // return resOfRespons;
    
   //   if (resOfRespons.length === 0) {
   //      Notiflix.Notify.failure('Oops, there is no country with that name')
   //   }
     
  
 
 
   //  Notiflix.Notify.failure('Oops, there is no country with that name')
 
   //   imageOfLightbox();

// };
   
// }















export default function server(url, settings = {}) {
   const defaultParth = 'https://api.themoviedb.org/3/trending/';
   const imageParth = 'https://image.tmdb.org/t/p/w500';
   const API_KEY = '0754829cbe2d4a3d2043b315bf2671de';
   const language = 'ru';
   const _url = `${defaultParth}/${url}/day?api_key=${API_KEY}&page=1&language=${language}region=${language}`;
   return fetch(_url).then(response => { return response.json() });
}

