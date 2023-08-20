import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieList from '../client/components/MovieList'
import MovieDetails from '../client/components/MovieDetails'
import MovieProvider from '../client/components/MovieContext'



export default function App() {
  return (
    <Router>
      <>
        <h1>Virtual Movie Night -N- Chill</h1>
          <MovieProvider>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path ="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
          </MovieProvider>
      </>
    </Router>
  );
}
