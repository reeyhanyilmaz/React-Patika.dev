//1.yazım
// function topla (a, b){
//     return a + b;
// }

//2.yazım
// const topla = function topla (a, b){
//     return a+b;
// }

//3.yazım
// const topla =  (a, b) => {
//     return a+b;
// }

//4.yazım
// const topla = (a, b) => a+b;

// // const hello = () => {
// //     console.log("hello");
// // }
// export default topla; // bu dosyayı göndermeye açık hale getirdik.

// bu şekilde de export yapılabilir**************
// export const topla = (a, b) => a+b;

// export const hello = () => {
//          console.log("hello");
//      }

// bu şekilde de export yapılabilir**************
//  const hello = name => { // tek parametrede name'e parantex koymamıza gerek yok!
//          console.log("hello "+ name);
//          console.log(`hello ${name}`);
//      }
export default (name) => {
  // böyle de default aktarma yapabiliriz.
  console.log("hello " + name);
  console.log(`hello ${name}`);
};

export const topla = (a, b) => a + b;
export const cikar = (a, b) => a - b;
export const text = "Text";
export const user = {
  name: "reyhan",
  surname: "yılmaz",
};

export const users = [
  {
    name: "reyhan",
    surname: "yılmaz",
  },
  {
    name: "selen",
    surname: "akyüz",
  },
];

//  export default hello;
