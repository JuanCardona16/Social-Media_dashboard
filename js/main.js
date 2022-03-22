const switcher = document.getElementById('switcher');
const switcher__btn = document.querySelector('.switcher__btn');
const body = document.querySelector('.body');
const switcher__title = document.querySelector('.switcher__title');

switcher.addEventListener('click', themeFun);

function themeFun() {
  switcher.classList.toggle('trasform');
  switcher__btn.classList.toggle('dark');
  body.classList.toggle('dark');
  if (body.className.includes('dark')) {
    switcher__title.innerHTML = 'Light Mode';
  } else {
    switcher__title.innerHTML = 'Dark Mode';
  }
}