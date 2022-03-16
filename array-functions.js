// const users = ["reyhan" , "Ahmet" , "Murat"];
const users =[{
    name: "Reyhan",
    age: 18,
}, {
    name: "Ahmet",
    age: 29,
},
];
// const newUsersArray = ["Ayşe", ...users];
// console.log("users", users);
// console.log("newUsersArray", newUsersArray);

// const country = {
//     name: "Turkiye",
// };

// const newCountryObject = {
//     ...country,
//     code: "TR",
// };

// console.log(country);
// console.log(newCountryObject);


//METHODLAR***********
//PUSH
// users.push("Ayşe");
// console.log(users);



//MAP. for yerine kullanılır her bir elemanı döner.
// users.map((item) => {
//     console.log(item);
// });

// users.map((item) => {
//     console.log(item.name);
// });


//FIND. arrayde verilen kosulda arama yapar.
// const result = users.find((item) => item.name === "Reyhan");
// console.log(result);

//FILTIRED
// const filtered = users.filter((item) => item.name === "Reyhan" && item.age < 20);
// const filtered = users.filter(({name, age}) => name === "Reyhan" && age < 20);
// console.log(filtered);

//SOME. herhangi birinde varsa true doner yoksa false döner. 
// const some = users.some((item) => item.age === 18)
// console.log(some);

//EVERY. array'in tüm elemanlarının sarta uymasını bekliyor.
// const every = users.every(item => item.age > 10 );
// console.log(every);

//INCLUDES. icinde olup olmadıgını kontrol eder.
const meyveler = ["elma" , "armut", "muz"];
const isIncluded = meyveler.includes("muz");
console.log(isIncluded);