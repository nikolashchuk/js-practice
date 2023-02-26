// const start = 1;
// const end = 10;

// for (
//   let i = start;
//   i <= end;
//   i += 1
// ) {
//   console.log(i);
// }

// сумма покупок
// const order = [
//   15, 20, 50,
// ];

// let total = 0;

// for (
//   let i = 0;
//   i < order.length;
//   i += 1
// ) {
//   console.log(
//     order[i]
//   );

//   total += order[i];
// }

// console.log(
//   "total: ",
//   total
// );

// // самое лдинное слово из строки
// const string =
//   "The quick brown fox jumped over the lazy dog";

// let words =
//   string.split(" ");
// console.log(words);

// let maxWord =
//   words[0];

// for (const word of words) {
//   if (
//     word.length >
//     maxWord.length
//   ) {
//     maxWord = word;
//   }
// }

// console.log(
//   maxWord
// );

// объекты
// const playlist = {
//   rating: 7.9,
//   tracks: [
//     "трек-1",
//     "трек-2",
//     "трек-3",
//   ],
//   trackcout: 3,
// };

// console.log(
//   playlist
// );

// console.log(
//   "my tracks: ",
//   playlist.tracks
// );

// console.log(
//   "rating: ",
//   playlist.rating
// );

// console.log(
//   "количесво треков:",
//   playlist[
//     "trackcout"
//   ]
// );

// короткая запись свойств объекта
// const userName =
//   "Ted";
// const userType =
//   "junior";
// const userMail =
//   "ted@gmail.com";

// const singUp = {
//   userName,
//   userMail,
//   userType,
// };
// console.log(singUp);

// вычесляемые свойства
// const inputName =
//   "color";
// const inputValue =
//   "green";

// const getInput = {
//   [inputName]:
//     inputValue,
// };

// console.log(
//   getInput
// );

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes =
//   Object.values(
//     players
//   ); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime =
//   playtimes.reduce(
//     (acc, val) =>
//       acc + val
//   );

// // Change code above this line
// const averagePlayTime =
//   totalPlayTime /
//   playtimes.length;

// таск 7 вывести уникальные жанры
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books
//   .reduce((acc, elem) => [...acc, ...elem.genres], [])
//   .reduce((acc, elem) => (acc.includes(elem) ? acc : [...acc, elem]), []);
// console.log(allGenres);

// таск 8
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const findAllGenres = books => {
//   return books
//     .reduce((acc, elem) => [...acc, ...elem.genres], [])
//     .reduce((acc, elem) => {
//       if (acc[elem]) {
//         acc[elem] += 1;
//       } else {
//         acc[elem] = 1;
//       }
//       return acc;
//     }, {});
// };
// console.log(findAllGenres(books));

// task 9

// const vehicles = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const folteredModels = vehicles.filter(({ amount }) => amount >= 12).map(({ model }) => model);

// console.log(folteredModels);

// const onSales = vehicles.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);
// console.table(onSales);

// task 10
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const same = function (a, b) {
//   const sortA = [...a].sort((prev, next) => {
//     return prev - next;
//   });

//   const sortB = [...b].sort((prev, next) => {
//     return prev - next;
//   });

//   const sortADouble = sortA.map(elem => {
//     return elem * elem;
//   });
//   for (let i = 1; i < sortADouble.length; i += 1) {
//     if (sortADouble[i] !== sortB[i]) {
//       return false;
//     }
//   }
//   return true;

//   return sortA
//     .map(elem => elem * elem)
//     .every((element, index) => {
//       return element === sortB[index];
//     });
//   console.log(sortADouble);
//   console.log(sortA);
//   console.log(sortB);
// };

// console.log(same(a, b));

//  task 11
// const people = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
// ];
//нарцис  'Jhon'

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса'

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса

// const people4 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса
//Нарциса знають всі, нарцис не знає нікого

// const narName = people => {
//   const narc = people.find(({ know }) => know.length === 0);

//   if (!narc) {
//     console.log('немає нарциса');
//     return;
//   }
//   const result = people.every(element => {
//     if (element.name === narc.name) {
//       return true;
//     }
//     return element.know.includes(narc.name);
//   });

//   if (result) {
//     console.log('нарциc:', narc.name);
//   } else {
//     console.log('немає');
//   }
// };
// narName(people);
// narName(people2);
// narName(people3);
// narName(people4);

// task 12

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client1 = new Client('tomato', 'tomato@gmail.com');
// console.log(client1);
// console.log(client1.email);

// client1.email = 'mango@gmail.com';
// console.log(client1.email);

// task 13
// class UnsplashAPI {
//   #query = '';
//   #page = 1;
//   #per_page;
//   constructor({ per_page = 12 } = {}) {
//     this.#per_page = per_page;
//   }

//   getPhotos() {
//     console.log({ query: this.#query, page: this.#page, per_page: this.#per_page });
//     console.log('HTTPS-request');
//   }

//   incrementPage() {
//     this.#page += 1;
//   }

//   resetPage() {
//     this.#page = 1;
//   }

//   get query() {
//     return this.#query;
//   }

//   set query(newQuery) {
//     this.#query = newQuery;
//   }
// }

// const unsplashAPI = new UnsplashAPI();
// unsplashAPI.query = 'cat';
// unsplashAPI.getPhotos();
// unsplashAPI.incrementPage();
// unsplashAPI.incrementPage();
// unsplashAPI.incrementPage();
// unsplashAPI.getPhotos();
// unsplashAPI.resetPage();

// console.log(unsplashAPI);

// task 14

// class Worker {
//   static Level = { middle: 'middle', junior: 'junior', senior: 'senior' };
//   constructor({ name, age, salary } = {}) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }

// const developer = new Worker({ name: 'Pavlo', age: 24, salary: 1800 });
// console.log(developer.getSalary());
// console.log(developer);

// class TopLevelWorker extends Worker {
//   constructor(obj, hierarhyLevel) {
//     super(obj);
//     this.hierarhyLevel = hierarhyLevel;
//   }
//   getHierarhyLevel() {
//     return this.hierarhyLevel;
//   }
// }

// const middleDevelpoer = new TopLevelWorker(
//   { name: 'Vasyl', age: 27, salary: 700 },
//   Worker.Level.middle
// );
// console.log(middleDevelpoer);
// console.log(middleDevelpoer.getHierarhyLevel());
// console.log(middleDevelpoer.__proto__ === TopLevelWorker.prototype);
// console.log(developer.__proto__ === Worker.prototype);
// console.log(developer.prototype);
// console.log(Worker.__proto__ === Function.prototype);

// const box = document.querySelector('.js-box');
// console.log(box);
// box.addEventListener('click', onClick);
// let step = 20;

// function onClick(evt) {
//   console.log(evt.currentTarget);
//   step += 10;
//   evt.currentTarget.style.margin = `${step}px`;
// }

// const btn = document.querySelector('.js-show');
// const title = document.querySelector('.js-title');

// btn.addEventListener('click', getTitle);

// function getTitle(evt) {
//   title.textContent = 'hello from js';
//   //   evt.currentTarget.disabled = true;
//   console.log(evt.currentTarget);

//   btn.removeEventListener('click', getTitle);
// }
