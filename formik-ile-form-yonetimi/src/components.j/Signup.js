import React from 'react'
import { useFormik} from 'formik';
// import ValidationSchema from './Validation';
import Validation from './Validation';


// form validation 1 ***************************
//  function Signup() {

//   const {handleChange, handleSubmit, values } = useFormik({
//     initialValues: {
//         email: '',    
//         password: "",
//         passwordConfirm: "",
//         },

//     onSubmit : (values) => {
//       console.log(values);
//     },
//     ValidationSchema,
//   });

//   return (
//  <div>
//      <h1>Sign Up</h1>
//    <form onSubmit={handleSubmit}> 

//     <label >Email : </label>
//     <input name="email" value={values.email} onChange={handleChange}/> 

//     <br />
//     <br />

//     <label >Password : </label>
//     <input name="password" value={values.password} onChange={handleChange}/> 

//     <br />
//     <br />

//     <label >Confirm Password: </label>
//     <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange}/> 

//     <br />
//     <br />

//     <button type="submit">Submit</button>

//     <br />
//     <br />
    
//     <code>{JSON.stringify(values)}</code>
    
//     </form>  
//   </div>
//   )
// }


// form validation 2 ****************************
function Signup() {
      const {handleChange, handleSubmit, values , errors, touched, handleBlur} = useFormik({
        initialValues: {
            email: '',    
            password: "",
            passwordConfirm: "",
            },
    
        onSubmit : (values) => {
          console.log(values);
        },
        validationSchema: Validation, //burada validationSchema'da yazabilirdik direk yukarı da validationSchema import etseydik.
      });   
      return (
     
     <div>
         <h1>Sign Up</h1>
       <form onSubmit={handleSubmit}> 
    
            <label >Email : </label>
            <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/> 
            {/* touched  bi focus işlemi oluyor sonra başka input'a tıklanınca uyaarı verir*/}
            {errors.email && touched.email && <div className='error'> {errors.email} </div>}
        
            <br />
            <br />
        
            <label >Password : </label>
            <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/> 
            {errors.password && touched.password && <div className='error'> {errors.password} </div>}
        
            <br />
            <br />
        
            <label >Confirm Password: </label>
            <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}/>     
            {errors.passwordConfirm && touched.passwordConfirm && <div className='error'> {errors.passwordConfirm} </div>}

            <br />
            <br />
        
            <button type="submit">Submit</button>
        
            <br />
            <br />
            
            <code>{JSON.stringify(values)}</code>
        
        </form>      
      </div>    
      )
    }
export default Signup;
