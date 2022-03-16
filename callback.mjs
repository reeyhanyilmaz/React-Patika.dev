// setTimeout(()=> {
// console.log("merhaba");
// }, 5000);

//*********** */
// setInterval(() => {
//     console.log("merhaba ben her bir çalışacağım");
// },1000);

//************ */
// const sayHi = (cb) => {
//    cb();
// };
// sayHi( () => {
//     console.log("hello");
// });



//************ */
// import fetch from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users") //bir bilgiyi alıyoruz.
// .then((data) => data.json()) // data dönüyo APIda ne varsa. json dönmüyo. Json ile de parse ettik.
// // console.log(data); // bu şekilde stringfy veriyor.
// //  console.log(data.json()); promise verdi.
// // .then((users) => console.log(users));
// .then((users) => {
//     console.log("ilk users yüklenecek sonra posts yüklenecek.", users)
//     fetch("https://jsonplaceholder.typicode.com/posts/1") //fetch içinde then in içine fethc koyduk.
//     .then((data) => data.json())
//     .then((post) => console.log("post yüklendi", post));
// })
// burada iç içe fetch yazm amacı sıraya koymak. mesela dışarı koysak hangisi önce gelecek bilmyoruz. hangisi önce yüklenecek. şimdi ilk suers sonra post dönecek!!



//*********** */
// async function getData (){
//     const users = await ( await fetch("https://jsonplaceholder.typicode.com/users"))
//         .json();
//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
//     console.log("users" , users);
//     console.log("post1" , post1);
// }
// getData();
// async await ile de kodun okuması daha kolay oldu. fetch then ile aynı işlemi yapıyor ama. await ile veri gelene kadar bekle dedik. json işlemi de bize promise döndürdüğü için veri gelene kadar bekle diye tekrar await konuyor.!!



//********** */
// (() => {
//     console.log("reyhan");
// })();

// (async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   console.log("users", users);
//   console.log("post1", post1);
// })();
//burada kendi kendini çağıran bir anonim function yazdık.




// PROMİSES MODÜL************
//axios kullanımı:
import axios from "axios";
// (async () => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     console.log("users", users);
//     console.log("post1", post1);
//   })();
// bu kısımda json dosyasına   "type": "module"   ekledim ve callback uzantısını .mjs ile değiştirdim. "Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.". Bu şekilde hata aldım. Terminalde console.log'u çağırmak için de "node callback.mjs" şekilinde yazılmalı.


//Alıştırma 1***********
// const getComments = (number) => {
//   return new Promise((resolve, reject) => { //resolve başarılı kod, reject başarısız reddedilen.
//     if(number ===1) {
//       resolve({ text: "Selam"}); // bu resolveda string, number farklı şeyler de dönebilir.
//     }
    
//     reject("Bir problem olustu!");
//   });
// };

// getComments(2) // 1 yazınca yukarıdaki datayı getirdi then ile. 2 yazınca catch'e düştü.
// .then((data) => console.log(data)) // resolve then'e düşer.
// .catch((e) => console.log(e)); // başarısız kod reject olan catch'e düşer.



//Alıştırma 2***********
// const getUsers = () => {
//   return new Promise(async (resolve, reject) => { 
//     const {data} = await axios("https://jsonplaceholder.typicode.com/users");
//     resolve(data);
//   });
// };

// getUsers() 
// .then((data) => console.log(data)) 
// .catch((e) => console.log(e)); 



//Alıştırma 3***********
const getUsers = () => {
  return new Promise(async (resolve, reject) => { 
    const {data} = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("bir sorun olustu");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => { 
    const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
    resolve(data);
    // reject("bir sorun daha olustu");
  });
};

// (async() =>{
//   await getUsers() 
//   .then((data) => console.log(data)) 
//   .catch((e) => console.log(e)); 

//   await getPost(1) 
//   .then((data) => console.log(data)) 
//   .catch((e) => console.log(e)); 
// })();

// (async() =>{ //********* */ then catch yazmak istemezsek eger.  hatayı try catch ile yakalarız.
//   try{
//     const users = await getUsers();
//     const post =  await getPost(1);
   
//     console.log(users);
//     console.log(post);
//   } catch (e){
//     console.log(e);
//   }
// })();

//Promise.all**********
Promise.all([getUsers(), getPost(1)]) // birden fazla çalıştırmak istedigimiz sıralı dizelerde kullanılır.
.then(console.log)
.catch(console.log);