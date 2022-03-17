import './App.css';
// import Header from './components/Header';
// import React from "react";
import User from './components/User';

// const name = "Reyhan";
// const isLoggedIn = true;
const friends =[
  {
    id:1,
    name: "Ahmet"
  },
  {
    id:2,
    name: "mehmet"
  },
  {
    id:3,
    name: "ali"
  },
  {
    id:4,
    name: "veli"
  },
];

function App(){
  // return React.createElement("div", null, "Hello");

  // return (
  //   <div>
  //     <h1>
  //       Hello React
  //     </h1>
  //     <Header />
  //     <Header />
  //   </div>
  // );



// return (
//   <>
//   <Header/>
//   <p className = "xyz"> 
//     lorem ipsum dolor
//   </p>

//   <label htmlFor = "myinput">
// Name
// <input id="myinput" />
//   </label>
//   </>
// );



// return (
//     <>
//       {/* <h1> {name}</h1> */}
//       <h1 > {`Benim adım ${name}`} </h1>      
//     </>
//     );



// return (
//       <>
//       <h1>
//         {isLoggedIn && `Benim adım ${name}`}
//       </h1>

//       <h1>
//        {! isLoggedIn && "Giriş yapmadınız"}
//       </h1>      
//       </>
//       );




//PROPS****************
return(
  <User 
  // name="Reyhan" 
  surname="Yılmaz" 
  isLoggedIn={true} 
  age={28} 
  friends={friends} 
  address={{
    title: "Avcılar/ Istanbul",
    zip: 34755
  }}
  />
)
}

export default App; //dışa aktardık.
