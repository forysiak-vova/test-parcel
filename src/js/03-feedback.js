import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css'
import axios from 'axios';
import { async } from 'regenerator-runtime';
import servises from '../servises/api'

// const formData = { };
// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input')
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTexareaInput, 500));
// // refs.input.addEventListener('input', throttle(onInputEmail, 500));



// refs.form.addEventListener('input', e => {
   
//    formData[e.target.name] = e.target.name;
//    console.log(formData);

//    localStorage.setItem('feedback-form-state2', JSON.stringify(formData))
// });

// populateTexterea();


// // function onInputEmail(e) {
// //    const email = e.target.value;
// //     localStorage.setItem('feedback-form-state1',  email);

   
// // };

// function onFormSubmit(e) {
//    e.preventDefault();
  
//    e.currentTarget.reset();
//    localStorage.removeItem('feedback-form-state');
//    localStorage.removeItem('feedback-form-state1');
//    console.log('відправляємо форму');
  
   
// };

// function onTexareaInput(e) {
//     const message = e.target.value;
//    localStorage.setItem('feedback-form-state', message);
 
// };

// function populateTexterea(e) {
//    const savedMessage = localStorage.getItem('feedback-form-state');
//    // const saveEmail = localStorage.getItem('feedback-form-state1');
//    // if (savedMessage || saveEmail) {
//    //    console.log(saveEmail);
//    //    console.log(savedMessage);
//    //    refs.textarea.value = savedMessage;
//    //     refs.input.value = saveEmail;
//    // };
//     if (savedMessage) {
//       // console.log(saveEmail);
//       console.log(savedMessage);
//       refs.textarea.value = savedMessage;
//       //  refs.input.value = saveEmail;
//    };
 
// };

// ====================================================================================

// const formData = { };
// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    // input: document.querySelector('.feedback-form input')
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTexareaInput, 500));
// // refs.input.addEventListener('input', throttle(onInputEmail, 500));



// refs.form.addEventListener('input', e => {
   
//    formData[e.target.name] = e.target.name;
//    // console.log(formData);

//    localStorage.setItem('feedback-form-state2', JSON.stringify(formData));
//    // console.log(localStorage.getItem('feedback-form-state2'));
  
// });

// populateTexterea();


// // function onInputEmail(e) {
// //    const email = e.target.value;
// //     localStorage.setItem('feedback-form-state1',  email);

   
// // };

// function onFormSubmit(e) {
//    e.preventDefault();

//    console.log(localStorage.getItem('feedback-form-state2'));
//    e.currentTarget.reset();
//    localStorage.removeItem('feedback-form-state2');
//      localStorage.removeItem('feedback-form-state');
//    // localStorage.removeItem('feedback-form-state1');
//    // console.log('відправляємо форму');
  
   
// };

// function onTexareaInput(e) {
//     const message = e.target.value;
//    localStorage.setItem('feedback-form-state', message);
 
// };

// function populateTexterea(e) {
//    const savedMessage = localStorage.getItem('feedback-form-state');
//    // const saveEmail = localStorage.getItem('feedback-form-state1');
//    // if (savedMessage || saveEmail) {
//    //    console.log(saveEmail);
//    //    console.log(savedMessage);
//    //    refs.textarea.value = savedMessage;
//    //     refs.input.value = saveEmail;
//    // };
//     if (savedMessage) {
//       // console.log(saveEmail);
//       console.log(savedMessage);
//       refs.textarea.value = savedMessage;
//       //  refs.input.value = saveEmail;
     
//    };
 
// };

// =================================================================================================

// const formData = { };
// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input')
// };

// refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
// refs.form.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput(e) {
//     formData[e.target.name] = e.target.value;
//    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  
// };
// populateTexterea();
// function onFormSubmit(e) {
//    e.preventDefault();
//    const feedbackForm = localStorage.getItem('feedback-form-state');
//    const parsForm = JSON.parse(feedbackForm);
//    console.log(parsForm);
//    // console.log(localStorage.getItem('feedback-form-state'));
//    e.currentTarget.reset();
//    localStorage.removeItem('feedback-form-state');
// };

// function populateTexterea(e) {
//    const savedMessage = localStorage.getItem( 'feedback-form-state');
   
//     if (savedMessage) {
      
//       refs.textarea.value = savedMessage;
//      refs.input.value = savedMessage;
     
//    };
 
// };

// ==============================================================

// const formData = { };
// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input')
// };

// refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
// refs.form.addEventListener('input', throttle(onFormInput, 500));

// // populateTexterea();

// function onFormInput(e) {
//    //  formData[e.target.name] = e.target.value;
//    // localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//    const formData = e.target.value;
//    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  
// };



// function onFormSubmit(e) {
//    e.preventDefault();

//    const feedbackForm = localStorage.getItem('feedback-form-state');
//    const parsForm = JSON.parse(feedbackForm);
//    console.log(parsForm);
//    // console.log(localStorage.getItem('feedback-form-state'));
//    e.currentTarget.reset();
//    localStorage.removeItem('feedback-form-state');
// };

// function populateTexterea(e) {
//    const savedMessage = localStorage.getItem('feedback-form-state');
//    // const localString = JSON.parse(savedMessage);
//    // console.log(localString);

//     if (savedMessage) {
      
//       refs.textarea.value = savedMessage;
//      refs.input.value = savedMessage;
     
//    };
 
// };
// ====================================== ФІТБЕК ФОРМ =====================================

// const formData = { };
// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input')
// };

// refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
// refs.form.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput(e) {
//     formData[e.target.name] = e.target.value;
//    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//    const resData = new FormData(e);
//    resData.array.forEach(element => {
      
//    });
  
  
// };
// populateTexterea();
// function onFormSubmit(e) {
//    e.preventDefault();
//    const feedbackForm = localStorage.getItem('feedback-form-state');
//    const parsForm = JSON.parse(feedbackForm);
//    console.log(parsForm);

//    // console.log(localStorage.getItem('feedback-form-state'));
//    e.currentTarget.reset();
//    localStorage.removeItem('feedback-form-state');
// };

// function populateTexterea(e) {
//    const savedMessage = localStorage.getItem('feedback-form-state');
//    const localString = JSON.parse(savedMessage);
//    console.log(localString);

//     if (savedMessage) {
      
//       refs.textarea.value = savedMessage;
//      refs.input.value = savedMessage;
     
//    };
 
// };

// ====================================================== ASYNC AWAIT (firebase)===============================================================



// const createUser =  options => {
// return  axios.post(`${process.env.NODE_ENV_BASE_URL}/users.json`, options)
   
// }
// const getUserInfo =  id => {
// return  axios.get(`${process.env.NODE_ENV_BASE_URL}/users/${id}.json`)
   
// }

// =======================================================================================================================================
// createUser({
//    "name": "admin666666",
//    "languege": "uk",
//    "skill": 'administration66666'
// }).then(data => getUserInfo(data.data.name).then(user => console.log(user)));

// async function renderUser() {
// const user = await createUser({
//    "name": "admin2",
//    "languege": "uk",
//    "skill": 'administration'
// })
// console.log(user)
// }
//  renderUser()

// const render = async () => {
//    const {data}  = await createUser({
//       name: "Pimky",
//       language: "ger",
//       skill: "sass"
//    });
//    console.log(data)
//    const info = await getUserInfo(data.name);
//    console.log(info);
// }
// // console.log(process.env.NODE_ENV_BASE_URL);
// render()


// ===========================================================   ФЕЧ ЗАПРОС НА ТЕСТОВЕ ЗАВДАННЯ ДО ВРОЦЛАВА ПУНК АПІАЙ ====================
// const divEL = document.querySelector('.titleEl');



// fetch("https://api.punkapi.com/v2/beers?page=1&per_page=5").then(response => response.json())
//    .then(renderBeer)

// function renderBeer(data) {
//    const res = data.reduce(((acc, el) => (acc += `<div><p>${el.name}</p><img src = "${el.image_url}" width = 120 height = 200><p>${el.description}</p> </div>`)), '')
//    divEL.innerHTML = res;
//    console.log(data)
// }

// ========================================================================================================================================================


// console.log(servises)
// const input = document.getElementById('input');

// input.addEventListener('submit', onInputValue);

// function onInputValue(e) {
//    e.preventDefault();
//    const valueInput = e.currentTarget.elements.text.value;
//    console.log(valueInput);
//    servises(valueInput).then(data => {console.log(data)})
// }












const divEL = document.querySelector('.titleEl');

servises('all').then(data => {
   console.log(data)
   const rest = data.results
   console.log(rest)
   // const url = 'https://image.tmdb.org/t/p/w500';
   const res = rest.reduce(((acc, el) => (acc += `<ul class="list"> 
   <li><img src ="https://image.tmdb.org/t/p/original${el.backdrop_path}" width = 100% ></li> 
   <h1 class="title">${el.original_title}</h1>
   <p>${el.release_date}</p>
    </ul>`)), '');
   divEL.innerHTML = res;
 
})