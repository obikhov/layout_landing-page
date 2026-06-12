const phoneButton = document.querySelector('.header__phone');
const phoneNumber = document.querySelector('.header__phone-number');

if (phoneButton && phoneNumber) {
  phoneButton.addEventListener('click', event => {
    event.preventDefault();

    phoneNumber.classList.toggle('active');
  });
}

const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');
const menu = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('.menu__nav a');

if (menuOpen && menuClose && menu) {
  menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}
