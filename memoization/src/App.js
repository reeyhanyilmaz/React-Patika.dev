import './App.css';
import Header from './components/Header';

//React.memo()
// import { useState } from 'react';

//useMemo
// import { useState, useMemo } from 'react';

//useCallback
import { useState, useMemo , useCallback} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  //const data = {name: "Reyhan"}; bu data tanımlamasını function dışında tanımlarsak header'ın Re-render'ını önleriz ama içerde tanımlamamız gerekirse useMome hook'u kullanılır. 

  //useMemo
  const [text, setText] = useState("");

  //useMemo ile tanımlı data 
  // const data = useMemo(() => {
  //  return [{name: "Reyhan" , number}];
  // }, [number])
  //header bu sekilde tekrar tekrar render edilmeyecek. Header [] icindeki dependency array degisinde render olacak. Mesela number eklersek.Return edilen şey object "{}" de olabilir array de "[]". 
  
  //func. tanımlayıp atayınca , useMemo
  // const data = useMemo(() => {
  //    return calculateObject(number);
  //   }, [number])

  //useMemo'suz function da kullanırsak. Bu yöntem ile input'a veri girilince hesaplama yapmaya zorluyor. o yüzden useMemo ile giris yapınca input'a sorun olmuyor.
  // const data = calculateObject();

//useCallback
const increment = useCallback(() => {
    // setNumber(number+1); 
    setNumber((prevState) => prevState + 1)
}, []); //[] number vermezsek 1 olur sadece arttırım yapmaz. Bu seferde Header tekrar render islemi oluyor, bastan tanımlama yapıyor. O yüzden prevState önceki state'i al yapabiliriz. Header (yani üst kısım) render olmaz prevState ile gereksiz render olmaz.


  //React.memo- useMemo*********************************
  // return (
  //   <div className="App">

      {/* React.memo*************** */}
      {/* <Header number ={number < 5 ? 0 : number } */}

      {/* useMemo****************** */}
      {/* <Header data={data}/>
      <hr />
      
     <h1>{number}</h1>
     <button onClick={() => setNumber(number + 1)} >Click</button>

     <br /><br /> */}

    {/* useMemo **************/}
    {/* <input value={text}  onChange={({target}) => setText(target.value)}/> */}
    {/* </div>
  ); */}

 {/* useCalback *********************************** */}
      return (
        <div className="App">
            <Header increment = {increment}/>
            <hr /> 
            <br /><br />

            <h1>{number}</h1>

            <input value={text}  onChange={({target}) => setText(target.value)}/>
        </div>
      )
}
//state komple render oluyor o yüzden header'da render ediliyor bunun önüne React.memo() ile geçeriz. Header ise ne zaman render olacak. Header a ge.tiğimiz propertiler ne zaman değişirse Header'da tekrar render olur.

//useMemo****************************
// function calculateObject(number){
//   console.log("Calculating...");
//   for (let i=0; i<100000000; i++){}
//   console.log("Calculating completed!");
//   return {name: "Reyhan", number}
// };

export default App;
