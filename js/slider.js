const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
btnNext.addEventListener('click', onBtnNextClick);
btnPrev.addEventListener('click', onBtnPrevClick);

sliderItems.forEach((slide, index) => {
  //  скрытие слайда кроме первого
  if (index !== 0) slide.classList.add('hidden');

  // индекс слайда
  slide.dataset.index = index;

  // добавть дата-атрибут active
  sliderItems[0].setAttribute('data-active', '');

  // клик по слайду
  slide.addEventListener('click', () => {
    showNextSlide('next');
  });
});

function onBtnNextClick() {
  showNextSlide('next');
}

function onBtnPrevClick() {
  showNextSlide('prev');
}

function showNextSlide(direction) {
  // скрыть текщий слайд
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = Number(currentSlide.dataset.index);
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  // расчет индекса в зависимости от направления
  let nextSlideIndex;
  if (direction === 'next') {
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === 'prev') {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }

  // показать слудующий слайд
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
}
