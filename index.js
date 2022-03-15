// DERS: 1
// console.log("Hello node");

// var slugify = require('slugify') //npm'dem import ettik

// const title = slugify('some string lorem ipsum');
// const title = slugify('some string lorem ipsum' , "*"); // 2. parametrede aralarına "-" yerine "*" koyar. örn: some*string*lorem*ipsum

// console.log(title); //terminal'de "npm start" ile çalıştırınca console.log'dakini basar. start JSON'dan alır, slugify'dakileri aralarına tire koyarak yazar örn: some-string-lorem-ipsum.

//DERS:2 ES6 Modül Sistemi
// import slugify from "slugify"; //slugfy bir modül.
// const title = slugify('some string reyhan yılmaz' , "*");
// console.log(title);

//import Topla from "./my-module.js";
console.log(topla(2, 4));
console.log(cikar(4, 2));
console.log(text);
console.log(user);
console.log(users);

//birden fazla import yapacaksam mesela
import hello, { topla, cikar, text, user, users } from "./my-module.js";

hello("Reyhan");
