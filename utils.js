const getElement = (target) => {
  const element = document.querySelector(target);
  if (element) {
    return element;
  } else {
    throw new Error(`Element "${target}" does not exist`);
  }
};

export default getElement;
