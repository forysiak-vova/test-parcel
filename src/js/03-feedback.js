import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css'

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
//    input: document.querySelector('.feedback-form input')
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

const formData = { };
const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));





refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(formData)); 
};
// populateTexterea();
function onFormSubmit(e) {
   e.preventDefault();
   const feedbackForm = localStorage.getItem('feedback-form-state');
   const parselForm = JSON.parse(feedbackForm);
   console.log(parselForm);
   // console.log(localStorage.getItem('feedback-form-state'));
   e.currentTarget.reset();
   localStorage.removeItem('feedback-form-state');
};

// function populateTexterea(e) {
//    const savedMessage = localStorage.getItem('feedback-form-state');
   
//     if (savedMessage) {
      
//       refs.textarea.value = savedMessage;
//      refs.input.value = savedMessage;
     
//    };
 
// };