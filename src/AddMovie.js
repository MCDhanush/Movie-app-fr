import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NearbyError } from '@mui/icons-material';
import {  useNavigate } from 'react-router-dom';
import { useFormik,Formik } from "formik";
import * as yup from 'yup';
import Box from '@mui/material/Box';



const movieValidationSchema = yup.object({
    name: yup.string().required("Plzz type Movie Name"),
    poster:yup.string().required("Crtana poster link podu").min(4,"Daiiii"),
    rating:yup.number().required("vena rating crta podu").min(1,"asingama keka vekadha").max(10,"Chi 10ku kela podu" ) ,
    summary:yup.string().required("Pathub nalladha podu da mve pathi").min(2),
    trailer:yup.string().required("crtanana trailer link podu ").min(4)
  });  

export function AddMovie() {
const {handleBlur,handleChange,handleSubmit,values,touched,errors} =
 useFormik({
  initialValues :{
    name: "",
    poster: "",
    rating:"" ,
    summary:"",
    trailer:"",

  },
  validationSchema: movieValidationSchema,
  onSubmit :(newMovie) =>{
  console.log("Movie added",values)
  addMovie(newMovie)

 },

})
 
  // const [name, setName] = useState('');
  // const [rating, setRating] = useState('');
  // const [poster, setPoster] = useState('');
  // const [summary, setSummary] = useState('');
  // const [trailer, setTrailer] = useState('')
  
  const navigate = useNavigate();
  const addMovie = (newMovie) =>{
   
    
    fetch('https://6496c59b83d4c69925a31739.mockapi.io/movies',{
      method:"POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type" :"application/json",
      },
    })
    .then(()=>navigate("/movies"))
    .catch((err)=> console.log("Error-Occured",err))

  }

  return (
    <form onSubmit={handleSubmit} className='add-mve-con'>

      <TextField 
      name='name' onChange={handleChange} value={values.name} error={touched.name && errors.name}  
      helperText={touched.name && errors.name ? errors.name : null}
      onBlur={handleBlur} label="Name" variant="outlined" type='text'  />
      <TextField 
       name='poster' onChange={handleChange}  value={values.poster}
       error={touched.poster && errors.poster}  
      helperText={touched.poster && errors.poster ? errors.poster : null}
       onBlur={handleBlur} label="Poster"  variant="outlined" type='text'/>
      <TextField 
      name='rating' onChange={handleChange}  value={values.rating}
      error={touched.rating && errors.rating}   
      helperText={touched.rating && errors.rating ? errors.rating : null}
      onBlur={handleBlur} label="Rating"  variant="outlined" type='text'/>
      <TextField 
      name='summary' onChange={handleChange} value={values.summary}
      error={touched.summary && errors.summary}  
      helperText={touched.summary && errors.summary ? errors.summary : null}
      onBlur={handleBlur} label="Summary" variant="outlined" type='text'/>
      <TextField 
      name='trailer' onChange={handleChange}  value={values.trailer}
      error={touched.trailer && errors.trailer}  
      helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      onBlur={handleBlur} label="Trailer" variant="outlined" type='text' />

      <Button variant="contained" type='submit'> Add Movie</Button>
 

    {/* <div>
      values
      <pre>{JSON.stringify(values,null,2)}</pre>
      Error
      <pre>{JSON.stringify(errors,null,2)}</pre>
      touched
      <pre>{JSON.stringify(touched,null,2)}</pre>
    </div> */}


    </form>
  );

}
