import React from 'react'
import {useState , useEffect} from "react";

const initialFormValues = {fullname: "" , phone_number: ""}

function Form( {addContact , contacts}) {
//  const [form ,setForm] = useState({fullname: "" , phone_number: ""});
    const [form ,setForm] = useState(initialFormValues); //2. yöntem. Input sıfırlama.

    useEffect(() => { //3.yöntem: input sıfırlama.
        setForm(initialFormValues); 
    },[contacts]); //contacts degistiginde input boşalt demek. Degismesi ne demek yeni veri girildi demek.

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault(); //submit olunca sayfanın yenilenmesini engellemek icin.

        if( form.fullname === "" || form.phone_number === ""){
            return false;
        }

//   setForm({fullname:"" , phone_number: ""});  //1. yöntem: inputa veri girilince inputu temizlemesi icin       

    addContact([...contacts, form]);
    // setForm(initialFormValues);  // 2. yöntem: inputa veri girilince inputu temizlemesi icin       
};

  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name='fullname' 
        placeholder='Full Name'
        value={form.fullname}
        onChange={onChangeInput} />
        </div>

        <br />
        <div>
            
        <input name='phone_number' placeholder='Phone Number' 
        value={form.phone_number}
        onChange={onChangeInput}/>
        </div>
        
        <div className='btn'>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form;