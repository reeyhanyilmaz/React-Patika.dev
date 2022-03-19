 //useEffect***************
// import {useState, useEffect} from "react";


//component unmount********
import Counter from "./Components/Counter";
import {useState} from "react";


function App() {
  //useEffect**************
  //   const [number , setNumber] = useState(0);
  //   const [name , setName] = useState("Reyhan");

  // // useEffect(() => {
  // //   console.log("state güncellendi")
  // // });

  // useEffect(() => {
  //   console.log("number state güncellendi")
  // },[number]);

  // useEffect(() => {
  //   console.log("name state güncellendi")
  // },[name]);

  // useEffect(() => {
  //   console.log("component mount edildi")
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>{number}</h1>
  //     <button onClick={() => setNumber(number + 1)}>Click</button>

  //     <hr />
  //     <h1>{name}</h1>
  //     <button onClick={() => setName("Ayşe")}>Click</button>
  //   </div>
  // )




  //Componet Unmount ***************
  const [isVisible, setIsVisible] = useState(true);
  return(
  <div className="App">
    {isVisible && <Counter/>}

    <br />
    <button onClick={() =>setIsVisible(!isVisible)}>Toogle Counter</button>
  </div>
  )
}

export default App;