import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required("Plzz type Movie Name"),
  poster: yup.string().required("Crtana poster link podu").min(4, "Daiiii"),
  rating: yup
    .number()
    .required("vena rating crta podu")
    .min(1, "asingama keka vekadha")
    .max(10, "Chi 10ku kela podu"),
  summary: yup.string().required("Pathub nalladha podu da mve pathi").min(2),
  trailer: yup.string().required("crtanana trailer link podu ").min(4),
});
export function EditMovie() {
  const { id } = useParams();
  const [moviee, setMoviee] = useState(null);
  useEffect(() => {
    fetch(`https://backend-practice-xmbh.onrender.com/practice/${id}`)
      .then((e) => e.json())
      .then((movie) => setMoviee(movie));
    // .then((e) => console.log(e.moviee))
  }, []);

  return moviee ? <EditMovieForm moviee={moviee} /> : "Loading...";
}

function EditMovieForm({ moviee }) {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        name: moviee.name,
        poster: moviee.poster,
        rating: moviee.rating,
        summary: moviee.summary,
        trailer: moviee.trailer,
      },
      validationSchema: movieValidationSchema,
      onSubmit: (updateMovie) => {
        console.log("Movie added", updateMovie);
        editMovie(updateMovie);
      },
    });
  const navigate = useNavigate();

  const editMovie = (updateMovie) => {
    fetch(`https://backend-practice-xmbh.onrender.com/practice/${moviee.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/movies"))
      .catch((e) => console.log("Error Occured", e));
  };

  return (
    <>
      <div className="form-s">
        <form onSubmit={handleSubmit} className="add-mve-con">
          {/* {JSON.stringify(moviee)}  */}
          <TextField
            name="name"
            onChange={handleChange}
            value={values.name}
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errors.name : null}
            onBlur={handleBlur}
            label="name"
            variant="outlined"
            type="text"
          />
          <TextField
            name="poster"
            onChange={handleChange}
            value={values.poster}
            error={touched.poster && errors.poster}
            helperText={touched.poster && errors.poster ? errors.poster : null}
            onBlur={handleBlur}
            label="Poster"
            variant="outlined"
            type="text"
          />
          <TextField
            name="rating"
            onChange={handleChange}
            value={values.rating}
            error={touched.rating && errors.rating}
            helperText={touched.rating && errors.rating ? errors.rating : null}
            onBlur={handleBlur}
            label="Rating"
            variant="outlined"
            type="text"
          />
          <TextField
            name="summary"
            onChange={handleChange}
            value={values.summary}
            error={touched.summary && errors.summary}
            helperText={
              touched.summary && errors.summary ? errors.summary : null
            }
            onBlur={handleBlur}
            label="Summary"
            variant="outlined"
            type="text"
          />
          <TextField
            name="trailer"
            onChange={handleChange}
            value={values.trailer}
            error={touched.trailer && errors.trailer}
            helperText={
              touched.trailer && errors.trailer ? errors.trailer : null
            }
            onBlur={handleBlur}
            label="Trailer"
            variant="outlined"
            type="text"
          />

          <Button variant="contained" type="submit" color="success">
            {" "}
            Save
          </Button>

          {/* <div>
          values
          <pre>{JSON.stringify(values,null,2)}</pre>
          Error
          <pre>{JSON.stringify(errors,null,2)}</pre>
          touched
          <pre>{JSON.stringify(touched,null,2)}</pre>
        </div> */}
        </form>
      </div>
    </>
  );
}
