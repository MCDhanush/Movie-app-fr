import { useFormik } from "formik";
import * as yup from "yup";

const formValidationScheme = yup.object({
  email: yup.string().min(5),
  password: yup.string().min(8).max(12)
})

export function BasicForm() {

const formik = useFormik({
initialValues :{
 email :"",
 password : ""
  },
  validationSchema :formValidationScheme,
  onSubmit:(values) =>{
   console.log("dsdsd",values);
  }
})

  return (<>
  
  <form onSubmit={formik.handleChange}>
    <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} 
    placeholder="username" onBlur={formik.handleBlur}
    />
    <input  name="password" placeholder="password" 
    type="text" value={formik.values.password} onChange={formik.handleChange}
   
    />
    <button type="submit">Submit</button>
  </form>
  
  
  </>
  )}
