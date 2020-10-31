import getElement from './utils.js';

const image = getElement('.user-img');
const userTitle = getElement('.user-title');
const userValue = getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (data) => {
  image.src = data.picture;
  userTitle.textContent = `My name is`;
  userValue.textContent = data.name;
  btns.forEach((btn) => btn.classList.remove('active'));
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.dataset.label;
      userTitle.textContent = `My ${label} is`;
      userValue.textContent = data[label];
      btns.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');
    });
  });
};

export default displayUser;
