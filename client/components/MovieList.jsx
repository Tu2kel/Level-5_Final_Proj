import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MovieContext } from '../components/MovieContext'
// import AddMovie from './AddMovie.jsx'
// import './styles.css'

export default function MovieList() {

  const { movies, setMovies } = useContext(MovieContext)

  useEffect(() => {
    axios 
      .get('/movies')
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => {
        console.log('Error fetching movies: ', err)
      })
      
  }, []);

  return (
    <div>
        <h1 className="title">Virtual Movies and Chill</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie._id}> 
            <Link to={`/movies/${movie._id}`}> {movie.title} </Link>
            </li>
          
          ))}
        </ul>
    </div>
  )
}

