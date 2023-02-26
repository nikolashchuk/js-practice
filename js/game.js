function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];

const randomither = max => {
  return Math.floor(Math.random() * max);
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const form = document.createElement('div');
document.body.append(form);
onFormClick();
form.addEventListener('click', onFormClick);

function onFormClick() {
  form.style.cssText = forms[randomither(forms.length)];
  form.style.backgroundColor = getRangomColor();
  form.style.position = 'absolute';
  let heigth = 100 - (form.clientHeight * 100) / document.documentElement.clientHeight;
  let width = 100 - (form.clientWidth * 100) / document.documentElement.clientWidth;
  form.style.top = `${randomither(heigth)}%`;
  form.style.left = `${randomither(width)}%`;
}
