import {useState} from "react"; 
//useState react'ın altında hook.

function App() {
  //name'in degerini degistirecek func.ismi 2. parametre olarak setName diye yazılır...
  const [name , setName] = useState("Reyhan");
  const [age , setAge] = useState(28);
  const [friends, setFriends] = useState(["Ahmet" , "Mehmet"]);
  const [address, setAddress] = useState({title: "Istanbul", zip: 34700})

  console.log(age, name);

  return (
    <div className="App">
      
       <h1>Merhaba {name}!</h1>
       <h2>{age}</h2>
      <button onClick={() => setName("Ayşe")}>Change name</button>
      <button onClick={() => setAge(25)}>Change age</button>

    
      {/* ********Array state******** */}
      <hr/>
      <br />
      <br />    
      <h2>Friends</h2>

      {friends.map((friend, index) => (
      <div key={index}>  {friend}  </div>
      // bir listeleme yapıyorsak return ettiğimiz en dıştaki elemana key vermeliyiz.
      ))}

      <button onClick={() => setFriends([...friends, "Fatma"])}>Add new friend</button> 
      {/* burada dikkat ememiz gerekn önceki array'i korumamız ekleyerek gitmesi.  */}



      {/* *******Object state*******/}
      <hr/>
      <br />
      <br />
      <h2>Address</h2>

      <div> {address.title} {address.zip} </div>
      <br />
      {/* <button onClick={() => setAddress({title: "Ankara" , zip: 44444})}>Change the address </button>  */}
      <button onClick={() => setAddress({ ...address, title: "Ankara"})}>Change the address </button> 
      {/* ...address şeklinde eski onjeyi tut değiştirmek istediklerimi değiştir diyoruz. */}

    </div>
  );
}

export default App;
