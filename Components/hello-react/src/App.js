
import './App.css';
// import Header from './components/Header';
// import React from "react";

const name = "Reyhan";
const isLoggedIn = true;
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



return (
      <>
      <h1>
        {isLoggedIn && `Benim adım ${name}`}
      </h1>

      <h1>
       {! isLoggedIn && "Giriş yapmadınız"}
      </h1>      
      </>
      );
}

export default App; //dışa aktardık.