import '../css/common.css';
import '../css/03-feedback.css'

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTexareaInput);

function onFormSubmit(e) {
  

};



function onTexareaInput(e) {
    const message = e.currentTarget.value;
   localStorage.setItem('feedback-form-state', message);
};