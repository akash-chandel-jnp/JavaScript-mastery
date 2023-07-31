'use strict';
const modal_buttons = document.querySelectorAll('.show-modal');

for (let i = 0; i < modal_buttons.length; i++) {
  modal_buttons[i].addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
  });
}

document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!document.querySelector('.modal').classList.contains('hidden')) {
      document.querySelector('.modal').classList.add('hidden');

      document.querySelector('.overlay').classList.add('hidden');
    }
  }
});
