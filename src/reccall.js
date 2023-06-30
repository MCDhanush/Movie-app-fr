// // import { useParams, useNavigate } from 'react-router-dom';
// // import Button from '@mui/material/Button';
// // import WestIcon from '@mui/icons-material/West';
// // import { useEffect, useState } from 'react';

// // export function MovieDetails() {
// //   const { id } = useParams();
// //   // console.log(id);
// //   // const movies = movieList[id

// // const [movie, setMovieLists] = useState({})
// // useEffect(() =>{
// // fetch(`https://6496c59b83d4c69925a31739.mockapi.io/movies/${id}`)
// // .then((e) => e.json())
// // .then((movie)=>setMovieLists(movie))
// // },[] )

// // const navigate = useNavigate();
// // const styles = {
// //     color: movie.rating >= 8.5 ? "green" : "red"
// //   };

// //   return <>
// //     <div>
// //       <iframe
// //         width="100%"
// //         height="500px" src={movie.trailer}
// //         title="Hridayam | Official Trailer | Pranav Mohanlal, Darshana Rajendran, Kalyani Priyadarshan | 18th Feb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// //       <div className='movie-container-info'>
// //         <div className='movie-specs'>
// //           <h2 key={movie.name} className='movie-name'>{movie.name}</h2>
// //           <p key={movie.rating} style={styles} className='movie-rating'>⭐ {movie.rating}</p>
// //         </div>
// //         <p key={movie.summary} className='movie-summary'>{movie.summary}</p>
// //         <Button variant="contained" onClick={() => navigate(-1)} startIcon={<WestIcon />}>Back</Button>
// //       </div>
// //     </div>

// //   </>;
// // }


// // ********************
// import { useParams, useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import WestIcon from '@mui/icons-material/West';
// import { useEffect, useState } from 'react';

// export function MovieDetails() {
// const { id } = useParams();
//   // console.log(id);
//   // const movies = movieList[id
  
//   const [movie, setMovie] = useState({})
//   useEffect(() =>{
//     fetch(`https://6496c59b83d4c69925a31739.mockapi.io/movies/${id}`)
//     .then((e) => e.json())
//     .then((movies) =>console.log(movies))
//     .then((movie)=>setMovie(movie))
//   },[])
  
// const navigate = useNavigate();
// const styles = {
//   color: movie.rating >= 8.5 ? "green" : "red"
// };

//   return <>
//     <div>
//       <iframe
//         width="100%"
//         height="500px" src={movie.trailer}
//         title="Hridayam | Official Trailer | Pranav Mohanlal, Darshana Rajendran, Kalyani Priyadarshan | 18th Feb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//       <div className='movie-container-info'>
//         <div className='movie-specs'>
//           <h2 key={movie.name} className='movie-name'>{movie.name}</h2>
//           <p key={movie.rating} style={styles} className='movie-rating'>⭐{movie.rating}</p>
//         </div>
//         <p key={movie.summary} className='movie-summary'>{movie.summary}</p>
//         <Button variant="contained" onClick={() => navigate(-1)} startIcon={<WestIcon />}>Back</Button>
//       </div>
//     </div>

//   </>;
// }


