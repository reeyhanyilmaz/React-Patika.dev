import {useState, useEffect} from 'react';

import "./style.css"
import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, useContacts] = useState([
      {
        fullname: "Reyhan",
        phone_number: "123123"
      },

      {
        fullname: "Ali",
        phone_number: "456456"
      },

      {
        fullname: "Ayşe",
        phone_number: "789789"
      }

    ]);


    useEffect (() => {
        console.log(contacts);
    }, [contacts]);

  return (
    <div id='container'>
      <h2>Contacts App</h2>
        <List contacts={contacts}/>
        <Form addContact={useContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;