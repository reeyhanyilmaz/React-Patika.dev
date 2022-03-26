// import { Formik, Field, Form } from 'formik';


//checkbox- raido-dropdown:
// import { Formik } from 'formik';

// useFormik:
// import { useFormik} from 'formik';

//form validation
import Signup from './components.j/Signup';
import Validation from './components.j/Validation';

import './App.css';

function App() {

// useFormik ***********************
// Formik bize kolaylık saglıyor, state tanımlamak, state'e seTstate ile atama yapmak zorunda kalmıyoruz.

// useFormik avantajı return kısmındaki callbackleri yani inputu sadeleştirdik. 
  // const {handleChange, handleSubmit, values } = useFormik({
  //   initialValues: {
  //     firstName: 'Reyhan',
  //       lastName: 'Yılmaz',
  //       email: 'reyhanylmz1993@gmail.com',
  //       gender: "female",
  //       hobies: [],
  //       country: "Turkey", 
  //   },

  //   onSubmit : (values) => {
  //     console.log(values);
  //   },
  // });

 

  return (
    <div className="App">
    {/* <h1>Sign Up</h1> */}

    
   {/* <Formik  */}
      { /* initialValues={ */ }
      {
        // firstName: 'Reyhan',
        // lastName: 'Yılmaz',
        // email: 'reyhanylmz1993@gmail.com',
        // gender: "female",
        // hobies: [],
        // country: "Turkey", 
        // hobies array cünkü birden fazla secim yapılabilir.
      // }}
      // onSubmit={(values) => {
      //   console.log(values);
      // }}
    // >

// initialValues'da verilen key ne ise name tanımında da o olmalı!!!! 
      /* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" placeholder="Jane" />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" placeholder="Doe" />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <Field name="email" placeholder="jane@acme.com" type="email" />

        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik> */}


{/* Form yapısı değil de HTML yapısı kullanmak istersek; *******************  */}
        
{/* süslü parantez icine arrow func yazdık ve formu içine koyarak return yaptık */}
        {/* {( {handleSubmit, handleChange}) => (
               <form onSubmit={handleSubmit}> */}
                 {/* form submit edilinde yukarda onSubmit çalışmış olacak log'da verileri görecegiz. */}
               {/* <label htmlFor="firstName">First Name</label> */}

               {/* field kullanmadıgımız icin name ile initialValuesdeki veriyi esleştiremedi. O yüzden useState gibi burada da onChange={handleChange} kullanıyoruz. log'da inputa girdiğimiz değeri görebiliriz artık. */}
               {/* <input name="firstName" onChange={handleChange}/> */}
       
               {/* <br /> */}
               {/* <br /> */}
       
               {/* <label htmlFor="lastName">Last Name</label> */}
               {/* <Field name="lastName" placeholder="Doe" /> */}
       
               {/* <br /> */}
               {/* <br /> */}
       
               {/* <label htmlFor="email">Email</label> */}
               {/* <Field name="email" placeholder="jane@acme.com" type="email" /> */}
       
               {/* <br />
               <br />
               <button type="submit">Submit</button>
             </form> */}
        {/* )
        } */}



{/* radio / checkbox/ dropdown  ********************************/}

         {/* {( {handleSubmit, handleChange, values}) => ( */}

{/* burada önemli olan input'a value vermek ve onChange'de de onu değistirecek fonksiyonu içine yazmak. */}
               {/* <form onSubmit={handleSubmit}> 
              
               <label htmlFor="firstName">First Name : </label> 
               <input name="firstName" value={values.firstName} onChange={handleChange}/> 
       
               <br />  
               <br />
       
                <label htmlFor="lastName">Last Name : </label> 
                <input name="lastName" value={values.lastName} onChange={handleChange}/> 
       
                <br /> 
                <br />
       
               <label htmlFor="email">Email : </label>
               <input name="email" value={values.email} onChange={handleChange}/> 
       
               <br />
               <br />

                <span>Male</span>
               <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"}/> 
               <span>Female</span>
               <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"}/> 

               <br />
               <br /> */}

{/* input[type=checkbox]*3 3 tane input olusturabiliriz. */}
              
              {/* <div>
              <input type="checkbox" name='hobies' value="fashion" onChange={handleChange}/>
              Fashion
              </div>
               
               <div>
               <input type="checkbox" name='hobies' value="watching sitcom" onChange={handleChange}/>
               Watching sitcom
               </div>
              
              <div>
              <input type="checkbox"name='hobies' value="swimming" onChange={handleChange}/>
              Swimming
              </div>
              
               <br />
               <br />

               <select name="country" value= {values.country} onChange={handleChange}>
                 <option value="turkey">Turkey</option>
                 <option value="england">England</option>
                 <option value="usa">USA</option>
               </select>

              <br />
              <br />

               <button type="submit">Submit</button>

               <br />
               <br />

               <code>{JSON.stringify(values)}</code>
               
             </form> */}
     
    {/* </Formik> */}

    <Signup />
  </div>
  );
} 

export default App;
