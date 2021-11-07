import throttle from 'lodash.throttle'
import '../css/common.css';
import '../css/03-feedback.css'

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTexareaInput);
refs.input.addEventListener('input', onInputEmail);

populateTexterea();


function onInputEmail(e) {
   const email = e.currentTarget.value;
    localStorage.setItem('feedback-form-state1', email);
   
};

function onFormSubmit(e) {
   e.preventDefault();
  
   e.currentTarget.reset();
   localStorage.removeItem('feedback-form-state');
   localStorage.removeItem('feedback-form-state1');
   console.log('відправляємо форму');
   
};

function onTexareaInput(e) {
    const message = e.currentTarget.value;
   localStorage.setItem('feedback-form-state', message);
};

function populateTexterea(e) {
   const savedMessage = localStorage.getItem('feedback-form-state');
   const saveEmail = localStorage.getItem('feedback-form-state1');
   if (savedMessage || saveEmail) {
      console.log(saveEmail);
      console.log(savedMessage);
      refs.textarea.value = savedMessage;
       refs.input.value = saveEmail;
   };
};