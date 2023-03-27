import AwesomeHelpers from './modules/awesomeHelpers.js';
import Clock from './modules/datetime.js';

const clock = () => new Clock('date');
clock();

const form = document.querySelector('form');
const awesomeBooks = new AwesomeHelpers();

function clearInputs() {
  document.querySelector('.book_title').value = '';
  document.querySelector('.book_author').value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const booKTitleValue = document.querySelector('.book_title').value;
  const booKAuthorValue = document.querySelector('.book_author').value;

  awesomeBooks.addBook(booKTitleValue, booKAuthorValue);
  clearInputs();
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.remove_book');
  if (target) {
    awesomeBooks.removeBook(Number(e.target.dataset.id));
  }
});

const navLinks = [...document.querySelectorAll('.link')];
const navSections = [...document.querySelectorAll('section')];

function removeSections() {
  navSections.forEach((section) => {
    section.classList.add('hide_section');
  });
}

function changeActiveNavLink(e) {
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
  e.target.classList.add('active');
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    removeSections();
    const targetSection = document.querySelector(e.target.hash);
    targetSection.classList.remove('hide_section');
    changeActiveNavLink(e);
  });
});
