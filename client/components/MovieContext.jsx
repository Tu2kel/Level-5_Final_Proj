import React, { createContext, useState } from 'react'

export const MovieContext =  createContext();



        const MovieProvider = ({ children }) => {
            const [movies, setMovies] = useState([])
            const [selectedMovie, setSelectedMovie] = useState({})
        

  return (
    <div>
      <MovieContext.Provider value = {{ movies,setMovies, selectedMovie, setSelectedMovie }}>
        {children}
      </MovieContext.Provider>
    </div>
  )
}

export default MovieProvider
