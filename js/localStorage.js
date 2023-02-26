const addLocal = document.querySelector('.js-addLocal');
const getLocal = document.querySelector('.js-getLocal');
const removeLocal = document.querySelector('.js-removeLocal');
const addSession = document.querySelector('.js-addSession');
const removeSession = document.querySelector('.js-removeSession');

const KEY_LOCAL = 'onAddlocal';

addLocal.addEventListener('click', onAddlocal);
getLocal.addEventListener('click', onGetLocal);
removeLocal.addEventListener('click', onRemoveLocal);
addSession.addEventListener('click', onAddSession);

function onAddlocal() {
  const arr = [1, 2, 3, 4, 5];
  localStorage.setItem(KEY_LOCAL, JSON.stringify(arr));
}

function onGetLocal() {
  //   try {
  //     const result = JSON.parse(localStorage.getItem(KEY_LOCAL));
  //     result.forEach(item => console.log(item));
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log('fff');
  //   }

  const result = JSON.parse(localStorage.getItem(KEY_LOCAL)) || [];
  result.forEach(item => console.log(item));
  console.log(result);
}

function onRemoveLocal() {
  localStorage.removeItem(KEY_LOCAL);
  //   localStorage.clear();
}

function onAddSession() {
  const obj = {
    name: 'user',
    getName() {
      console.log(`hello, i'm ${this.name}`);
    },
  };
  sessionStorage.setItem('sessionStorage', JSON.stringify(obj));
}
