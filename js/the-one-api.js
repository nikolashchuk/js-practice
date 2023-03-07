// https://the-one-api.dev/
// const KEY = "XJlq9OFMcHAy8pAQK7xj";

// with btn load more//

// const list = document.querySelector('.js-list');
// const load = document.querySelector('.js-load');
// load.addEventListener('click', onLoad);
// let page = 1;

// function lordOfTheRingsAPI(page = 1) {
//   const BASE_URL = 'https://the-one-api.dev/v2/character';
//   const TOKEN = 'XJlq9OFMcHAy8pAQK7xj';
//   const options = {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   };

//   return fetch(`${BASE_URL}?limit=30&page=${page}&sort=name:asc`, options).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// lordOfTheRingsAPI()
//   .then(data => {
//     console.log(data);
//     createMarkup(data.docs);
//     load.hidden = false;
//   })
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   const markup = arr
//     .map(
//       ({ name, race }) =>
//         `<li class="lord-item">
//         <h2>${name}</h2>
//         <h3>${race}</h3>
//       </li>`
//     )
//     .join('');

//   list.insertAdjacentHTML('beforeend', markup);
// }

// function onLoad() {
//   page += 1;
//   lordOfTheRingsAPI(page)
//     .then(data => {
//       createMarkup(data.docs);
//       if (data.page === data.pages) {
//         load.hidden = true;
//       }
//     })
//     .catch(err => console.log(err));
// }

//scroll//
const list = document.querySelector('.js-list');
const guard = document.querySelector('.js-guard');
let page = 1;

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 0,
};

let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      lordOfTheRingsAPI(page)
        .then(data => {
          createMarkup(data.docs);
          if (data.page === data.pages) {
            observer.unobserve(guard);
          }
        })
        .catch(err => console.log(err));
    }
  });
}

function lordOfTheRingsAPI(page = 1) {
  const BASE_URL = 'https://the-one-api.dev/v2/character';
  const TOKEN = 'XJlq9OFMcHAy8pAQK7xj';
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  return fetch(`${BASE_URL}?limit=300&page=${page}&sort=name:asc`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ name, race }) =>
        `<li class="lord-item">
        <h2>${name}</h2>
        <h3>${race}</h3>
      </li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

lordOfTheRingsAPI()
  .then(data => {
    console.log(data);
    createMarkup(data.docs);
    observer.observe(guard);
  })
  .catch(err => console.log(err));
