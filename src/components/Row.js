import React, { Component, useEffect, useState } from "react";
import axios from "../axios"; // becaue of defualt import instance is renamed to axios here.
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"; // this is the base url for images of all movies.

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs on a specific condition/variable.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if we leave the brackets blank we say run the once on page load. if we put movies under brackets like this [fetchUrl]. it will run when fetchUrl changes.

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
