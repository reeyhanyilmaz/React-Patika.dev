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

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  console.log("users", users);
  console.log("post1", post1);
})();
//burada kendi kendini çağıran bir anonim function yazdık.
