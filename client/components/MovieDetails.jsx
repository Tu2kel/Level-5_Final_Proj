import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MovieContext } from "../components/MovieContext";

export default function MovieDetails() {
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`/movies/${movieId}`)
      .then((res) => {
        setSelectedMovie(res.data);
      })
      .catch((err) => {
        console.log("Error fetching movie details:", err);
      });
  }, [movieId]);

  return (
    <div>
      <h2> {selectedMovie.title} </h2>
      <p> {selectedMovie.description} </p>
    </div>
  );
}
