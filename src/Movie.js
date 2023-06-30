import { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { useNavigate } from 'react-router-dom';


export function  Movie({ movies,id,deleteButton,editButton }) {
  let [show, setShow] = useState(true);

  const navigate = useNavigate({id})
  
  const styles = {
    color: movies.rating >= 8.5 ? "green" : "red"

  };


  return (<>
    <Card className='movie-container'>
      <img key={movies.poster} className='movie-poster' src={movies.poster} alt={movies.name} />
      <CardContent>
        <div className='movie-specs'>
          <h2 key={movies.name} className='movie-name'>{movies.name}</h2>
          <IconButton color="primary" aria-label="Toogle summary" onClick={() => setShow(!show)}>{show ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
          <InfoSharpIcon color="primary" aria-label="Movie details" onClick={()=>navigate(`./movies/${id}`)}></InfoSharpIcon>
          <p key={movies.rating} style={styles} className='movie-rating'>⭐ {movies.rating}</p>
        </div>
        {show ? <p key={movies.summary} className='movie-summary'>{movies.summary}</p> : false}
        <div className='low-but'>
      <Counter  /> 
      {editButton}
      {deleteButton}
        </div>
      </CardContent>
    </Card>
  </>
  );

}
