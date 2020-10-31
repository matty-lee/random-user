import getElement from './utils.js';
import getUser from './getUser.js';
import displayUser from './displayUser.js';

const btn = getElement('.btn');

const init = async () => {
  const userData = await getUser();
  displayUser(userData);
};

window.addEventListener('DOMContentLoaded', init);
btn.addEventListener('click', init);
