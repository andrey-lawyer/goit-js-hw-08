import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
// localStorage.clear();
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onTextareaInput, 200));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  const saved = localStorage.getItem(STORAGE_KEY);
  const parsSaved = JSON.parse(saved);

  console.log(`email: ${parsSaved.email}`);
  console.log(`message: ${parsSaved.message}`);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

let formData = {};

function onTextareaInput(e) {
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsSaved = JSON.parse(saved);
  // console.log(parsSaved);
  formData = { ...parsSaved };
  // formData = parsSaved;
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextarea();
function populateTextarea() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsSaved = JSON.parse(saved);
  if (saved) {
    refs.textarea.value = parsSaved.message;
    refs.input.value = parsSaved.email;
  }
}
