import Book from './modules/Book.js';
import UI from './modules/UI.js';
import Bookstore from './modules/Bookstore.js';
// eslint-disable-next-line no-unused-vars
import * as singlepage from './modules/singlepage.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  UI.addBook(book);
  Bookstore.addBook(book);

  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooks();
});

document.getElementById('bookshelf').addEventListener('click', (event) => {
  UI.removeBook(event.target);
  Bookstore.removeBook(
    event.target.previousElementSibling.previousElementSibling.textContent,
  );
});

console.log('any');
