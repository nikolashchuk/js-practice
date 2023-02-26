const listEl = document.querySelector('.js-accordion-list');
console.log(listEl);
listEl.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  evt.target.nextElementSibling.classList.toggle('active');
}
