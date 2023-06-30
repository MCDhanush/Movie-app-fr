import './App.css';
import { useEffect, useState } from 'react';
import { Route,Routes,Link, useRoutes, Navigate, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { NotFound } from './NotFound';
import { Initial_Movie_state } from './Initial_Movie_state';
import { MovieDetails } from './MovieDetails';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { BasicForm } from './BasicForm';
import { Formik } from "formik";
import { EditMovie } from './EditMovie';




function App() {
  const navigate = useNavigate()
  const [mode, setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
const [movieList, setMovieList] = useState([])
useEffect(() =>{
fetch('https://6496c59b83d4c69925a31739.mockapi.io/movies')
.then((e) => e.json())
.then((movies)=>setMovieList(movies))
},[] )


  return (

  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
    <Paper sx={{minHeight:'100vh'}} elevation={5}>
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("./")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate('/movies/add')}>Add Movies</Button>
          <Button color="inherit" onClick={()=>navigate('/color')}>Add color</Button>
          <Button color="inherit"  
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
          } 
          sx={{marginLeft:"auto"}}
           onClick={()=> setMode(mode === "light" ? "dark" :"light")}> 
           {mode === "light"? "dark" :"light" } mode</Button>
        </Toolbar>
      </AppBar>







<section className='section-con'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<MovieList movieList={movieList} />} />
        <Route path='/films' element={<Navigate replace to="/movies" />} />
        <Route path='/movies/add' element={<AddMovie  movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path='/color' element={<AddColor/>} />
        <Route path='/movies/movies/:id' element={<MovieDetails movieList={movieList}/>} />
        <Route path='/movies/edit/:id' element={<EditMovie/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/basic-form' element={<BasicForm/>}/>
      </Routes>
</section>
    
    </div> 
    </Paper>
      </ThemeProvider> 
  )
}

export default App;

