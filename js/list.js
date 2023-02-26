// add/remove items from list
const container = document.querySelector('.js-container');
console.log(container);

const input = document.createElement('input');
const addBtn = document.createElement('button');
const removeBtn = document.createElement('button');
const list = document.createElement('ol');

container.append(input, addBtn, removeBtn, list);

addBtn.textContent = 'add';
removeBtn.textContent = 'remove';

addBtn.addEventListener('click', () => {
  console.log(input.value);
  const markupItem = document.createElement('li');
  markupItem.textContent = input.value ? input.value : 'default value';
  list.append(markupItem);
  const isEvent = list.children.length % 2 === 0;
  markupItem.style.backgroundColor = isEvent ? 'red' : 'blue';
  input.value = '';
});

removeBtn.addEventListener('click', () => {
  if (!list.hasChildNodes()) return;
  list.lastElementChild.remove();
});
