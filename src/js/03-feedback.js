import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css'

const formData = { };
const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTexareaInput, 500));
refs.input.addEventListener('input', throttle(onInputEmail, 500));



refs.form.addEventListener('input', e => {
   
   formData[e.target.name] = e.target.name;
   console.log(formData);
   localStorage.setItem('feedback-form-state2', formData)
});

populateTexterea();


function onInputEmail(e) {
   const email = e.target.value;
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
    const message = e.target.value;
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