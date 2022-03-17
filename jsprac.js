// const personalMoviedataBase = {
//   count: 0,
//   movies: {},
//   actors: {},

//   genres: [],
//   privat: false,
//   start: function(){
//     personalMoviedataBase.count = +prompt('Сколько фильмов вы уже просмотрели', '');

//     while (personalMoviedataBase.count == "" || personalMoviedataBase.count == null || isNaN(personalMoviedataBase.count)) {
//       personalMoviedataBase.count = prompt('Сколько фильмов вы уже просмотрели', '');
//     }
//   },
//   rememberMyFilms: function(){
//     for (let i = 0; i < 2; i++) {
//       const questions = prompt('Один из последних просмотренных фильмов', " ")
//       const questions2 = +prompt("Наскольк вы его оцените", "")
  
//       if (questions != null && questions2 != null && questions != '' && questions2 != '' && questions.length < 50) {
//         personalMoviedataBase.movies[questions] = questions2;
//       }
//       else {
//         console.log('error')
//         i--;
//       }
//     }
//   },
//   detectLevel: function(){
//     if (personalMoviedataBase.count < 10) {
//       console.log('Просмотрено довольно мало фильмов')
//     } else if (personalMoviedataBase.count < 30) {
//       console.log('вы классический зритель')
//     } else if (personalMoviedataBase.count > 30) {
//       console.log("Вы киноман")
//     }
//     else {
//       console.log('ерор')
//     }
//   },
//   showMyDb: function(hidden){
//     if (!hidden) {
//       console.log(personalMoviedataBase)
//     }
//   },
//   writeYourGenres: function(){
//     for (let i = 1; i<=3; i++){
//       let genre = prompt(`ваш любимый жанр под номером ${i}`)

//       if (genre ==='' || genre==null){
//         console.log('вы ввели говно')
//         i--
//       } else{
//         personalMoviedataBase.genres[i-1] = genre;
//       }
//     }
//     personalMoviedataBase.genres.forEach((item,i) => {
//       console.log(`Любимый жанр номер ${i+1}- это ${item}`)
//     })
//   },
//   toggleVisibleDB: function(){
//     if (personalMoviedataBase.privat){
//       personalMoviedataBase.privat = false  
//     }
//     else{
//       personalMoviedataBase.privat = true
//     }
//   }
// };

// rememberMyFilms();

// detectLevel();

// showMyDb(personalMoviedataBase.privat);

// writeYourGenres();


// function calc(a,b){
//   return a+b;
// }


// console.log(calc(4,3))


// function ret(){
//   let num = 50;
//   return num;
// }




// const fruit = "banana frukt"
// console.log(fruit.substring(6,12))

// const num = 12.2;
// console.log(Math.round(num))

// const test = '12.2px'

// console.log(parseInt(test))

// const options = {
//   name: 'test',
//   width: 1024,
//   heigth: 1024,
//   colors: {
//     border: 'black',
//     background: 'red'
//   },
//   makeTest: function(){
//     console.log('test');
//   }
// }

// options.makeTest();

// // const {border, background} = options.colors;
// // console.log(background)

// // console.log(Object.keys(options).length)

// // console.log(options.name)
// // delete options.name;
// // console.log(options)

// // for ( let key in options){
// //   if (typeof(options[key])=== 'object'){
// //     for (let i in options[key]){
// //       console.log(`svoistvo ${i} imeet zna4enie ${options[key][i]}`)
// //     }
// //   } else{
// //     console.log(`svoistvo ${key} imeet zna4enie ${options[key]}`)    
// //   }
// // }


// let a = 5,
// b = a;

// b = b +5;


// const num = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// }

// const add = {
//   d: 16,
//   e: 20
// }

// const clone = (Object.assign({}, add));
// clone.d = 20;
// console.log(add);
// console.log(clone)

// const oldArray = ['a', 'b' , 'c']
// const newArray = oldArray.slice();
// newArray[1]= 'fdsfsdfsd'
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
// blogs = ['woedpress', 'blogger', 'twtich'],
// internet = [...video, ...blogs, 'vk', 'faciet'];

// console.log(internet)


// function log(a,b,c){
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// const likers = [2,5,7];
// log(...likers)

// const array = ['a','b', 'c'];

// const newAaaray = [...array]

// const q ={
//   one: 1,
//   two: 2,
// }

// const w = {...q}

// let str = 'some';
// let strObj = new String(str);
// console.log(typeof(str))
// console.log(typeof(strObj))

// const soldier = {
//   health: 400,
//   armor: 100
// }

// const jonh = Object.create(soldier);

// console.log(jonh.health)

// const jinh = {
//   health: 100,
// }

// Object.setPrototypeOf(jinh, soldier)
// console.log(jinh.armor)


console.log(typeof(String(5)))

console.log(typeof(5+5))

const num = 5;
console.log("https:///vk.com/dialogs/"+ num);

console.log(typeof(+"sdfsdfs"))

console.log(typeof(parseInt('16px', 10)))

let asnw = +prompt('sdfkdsf;sdkfs', '');
console.log(typeof(asnw))


let switcher = null;
if (switcher) {
  console.log('working...')
}