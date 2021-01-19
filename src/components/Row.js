import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios"; // becaue of defualt import instance is renamed to axios here.
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"; // this is the base url for images of all movies.

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // a snippet of code which runs on a specific condition/variable.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if we leave the brackets blank we say run the once on page load. if we put fetchUrl under brackets like this [fetchUrl]. it will run when fetchUrl changes.

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "") // this function (movieTrailer) here will give us a url of trailer like this https://www.youtube.com/watch?   v=6uE4nfFgc5Q.
        .then((url) => {
          // and here we will try to extract the movieId from that url which looks like this v=6uE4nfFgc5Q.

          const urlParams = new URLSearchParams(new URL(url).search); // new URL(url).search; this gives everything after the question mark in url. and URLSearchParams will allow us to fetch or make a get request to what we find in  new URL(url).search that is 'v';

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(
            "your trailer not found because of this error",
            error,
            movie
          );
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
}

export default Row;
