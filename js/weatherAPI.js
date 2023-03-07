const form = document.querySelector('.js-ewather');
const list = document.querySelector('.js-list');
form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const {
    query: { value: query },
    days: { value: days },
  } = evt.currentTarget.elements;

  if (!query) {
    return alert('add value');
  }

  weatherAPI(query, days)
    .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => (list.innerHTML = createErrorMarkup()));
}

function weatherAPI(query, days) {
  console.log(query);
  const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
  const KEY = '0a9bd4a9f4ef444eb91173733230203';
  return fetch(`${BASE_URL}?key=${KEY}&q=${query}&days=${days}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        day: {
          condition: { icon, text },
          avgtemp_c,
        },
        date,
      }) =>
        `<li>
        <img src="${icon}" alt="${text}" width=200 />
        <h3>${text}</h3>
        <h2>дата ${date}</h2>
        <h4>температура ${avgtemp_c}</h4>
      </li>`
    )
    .join('');
}

function createErrorMarkup() {
  return `<li><img src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg" alt="bad request" width=200 /></li>`;
}
