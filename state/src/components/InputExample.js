import {useState} from 'react'

function InputExample() {
    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");

    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname(event.target.value);


    // state tek e düsürmek icin
    const [form, setForm] = useState({name : "", surname: ""});
    const onChangeInput = (e) => {
        // console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value});
        // [event.target.name] object key olarak kullnaılıyor.
    };


  return (
    <div>
        {/* Name <br />         */}
        {/* <input value={name} onChange ={ (event) => setName(event.target.value)}/> */}
        {/* onChange'den önce input'a veri giremiyorduk, useState'de ne tanımlıysa onu veriyordu. Ancak onChange ile veri girişine izin verdik. */}
        {/* <input value={name} onChange ={onChangeName}/> */}

        {/* <br />
        <br />
        Surname <br />
        <input value={surname} onChange ={onChangeSurname}/> */}

        {/* {name}  */}
        {/* {name} girilen veriyi anlık aşağıya basar. */}
        {/* <br />
        <br />
        {name} {surname} */}


        {/*********  Inputu daha kısa nasıl yazabiliriz? ********/}
        Name <br />        
        <input name="name" value={form.name} onChange ={onChangeInput}/>
        <br />
        <br />

        Surname <br />
        <input name="surname" value={form.surname} onChange ={onChangeInput}/>
        <br />
        <br />
        {form.name} {form.surname}

    </div>
  )
}

export default InputExample