// import axios from 'axios';
export class Api { 
   
   constructor() { 
      this.page = 1;
      this.searchValue = '';
   }

   getValue() {
      return this.searchValue;
   }
   
   saveValue(value) { 
      if (this.searchValue !== value) { 
         this.page = 1;
       }
      this.searchValue = value;
       
   }
   

   getPage() {
      return this.page;
   }
   
   savePage() { 
      this.page = this.page + 1; 
   }
   nextPage() {
    
   }
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
   
}