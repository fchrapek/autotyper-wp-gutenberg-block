import domReady from '@wordpress/dom-ready';

const wait = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

const getRandomValueBetween = (min = 30, max = 150, randomNumber = Math.random()) => {
  return Math.floor(randomNumber * (max - min) + min);
}

const type = async (el) => {
  const text = el.textContent;
  let autoTypedString = '';

  for (const letter of text) {
    autoTypedString += letter;
    el.textContent = autoTypedString;

    const { typeMin, typeMax } = el.dataset;
    await wait(getRandomValueBetween(typeMin, typeMax));
  }
}

domReady(() => {
  const els = document.querySelectorAll('[data-type]').forEach(type);
});