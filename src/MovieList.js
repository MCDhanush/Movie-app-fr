import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function MovieList() {

const navigate = useNavigate()
const [movieList, setMovieList] = useState([])

const getMovies =()=>{
fetch('https://6496c59b83d4c69925a31739.mockapi.io/movies')
.then((e) => e.json())
.then((movies)=>setMovieList(movies))
}
useEffect(() => getMovies(),[] )

const deleteMovie = (id)=>{
  fetch(`https://6496c59b83d4c69925a31739.mockapi.io/movies/${id}`,{
    method:"Delete"
  })
  .then(() => getMovies())
}

return (
    <div className='movie-list-container'>
      {movieList.map((mv, index) => (
        <Movie key={mv.id} movies={mv} id={mv.id} 
        deleteButton={
        
        <IconButton className='delete-bu' color='error' onClick={()=>deleteMovie(mv.id)}> <DeleteIcon className='delete-bu' /></IconButton>} 
        
        editButton={<IconButton color="secondary" onClick={()=>navigate(`/movies/edit/${mv.id}`)} aria-label="add an alarm">
        <EditIcon/>
      </IconButton>}
        
        />
      ))}
    </div>
  );
}
