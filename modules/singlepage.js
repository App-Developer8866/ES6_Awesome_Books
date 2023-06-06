const contactInfo = document.getElementById('our-contact');

const bookList = document.getElementById('display-books');
const list = document.getElementById('list-link');
const formContainer = document.getElementById('form-input');

const listClick = list.addEventListener('click', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

const windowLoad = window.addEventListener('load', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

const addNewBtn = document.getElementById('new-link');

const linkClick = addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

const contactBtn = document.getElementById('contact-link');

const contactClick = contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});

export {
  listClick, windowLoad, linkClick, contactClick,
};
