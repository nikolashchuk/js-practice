const content = document.querySelector('.content');

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const KEY_X = 'keyX';
const KEY_O = 'keyO';
const KEY_PLAYER = 'player';
const KEY_COUNTER = 'counter';
const endGame = 9;
let counter = JSON.parse(localStorage.getItem(KEY_COUNTER)) || 0;
let player = localStorage.getItem(KEY_PLAYER) || 'X';

const stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
const stepO = JSON.parse(localStorage.getItem(KEY_O)) || [];

function autocomplete() {
  [...content.children].forEach(item => {
    const id = Number(item.dataset.id);
    if (stepX.includes(id)) {
      item.textContent = 'X';
    } else if (stepO.includes(id)) {
      item.textContent = 'O';
    }
  });
}

function createMarcup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id=${i}></div>`;
  }
  content.innerHTML = markup;
}
createMarcup();
autocomplete();

content.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.classList.contains('item')) {
    return;
  }

  if (evt.target.textContent) {
    return;
  }

  const currentId = Number(evt.target.dataset.id);

  let result = false;
  counter += 1;
  if (player === 'X') {
    stepX.push(currentId);
    localStorage.setItem(KEY_X, JSON.stringify(stepX));
    result = isWinner(stepX);
  } else {
    stepO.push(currentId);
    localStorage.setItem(KEY_O, JSON.stringify(stepO));
    result = isWinner(stepO);
  }
  evt.target.textContent = player;

  if (result) {
    chempion(player);
    return;
  }

  if (counter === endGame) {
    chempion('restart game');
    return;
  }

  player = player === 'X' ? 'O' : 'X';
  localStorage.setItem(KEY_PLAYER, player);
  localStorage.setItem(KEY_COUNTER, JSON.stringify(counter));
}

function chempion(player) {
  setTimeout(() => {
    alert(player);
    createMarcup();
    localStorage.clear();
    location.reload();
  }, 500);
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}
