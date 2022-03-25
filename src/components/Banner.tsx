import Requests from "../api/Axios";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QuickView from "./QuickView";
import Youtube from 'react-youtube';
// import movieTrailer from 'movie-trailer';


const Banner = () => {
  const [movie, setMovie] = useState<MovieInterface>();
  const [isOpen, setIsOpen] = useState(false);

  const [trailerUrl, setTrailerUrl] = useState('');
  const MOVIE_API = "https://api.themoviedb.org/3/"
  const API_KEY = process.env.REACT_APP_TMDB;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchTrending);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
    
  }, []);

  let manageOverview = () => {
    if (movie === undefined) {
      return 'no movie available at this time'
    } else {
      return truncate(movie.overview!, 100)
    }
  }

  const truncate = (overwiew: string, n: number) => {
    return overwiew?.length > n
      ? overwiew.substring(0, n - 1) + "..."
      : "No overview available";
  }


  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
  };

const opts = {
  height: "390",
  width: "100%",
}

// const handleClick = (movie :MovieInterface | undefined) => {
//   if(trailerUrl) {
//     setTrailerUrl('');
//   } else {
//     movieTrailer(movie?.name || '').then((url :URL) => {
//       const urlParams = new URLSearchParams(new URL(url).search);
//       const urlId = urlParams.get('v');
//       console.log('urilId:', urlId);
//       // setTrailerUrl(urlId);
//     }).catch((error: string) => console.log(error));
//   }
// }

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="banner_description">
          {manageOverview()}
        </p>
        <div className="banner_buttons">
          <button className="banner_play">
          {/* <button className="banner_play" onClick={() => handleClick(isMovie)}> */}
            <PlayArrowIcon fontSize="large" /><span className="button_text">Play</span>
          </button>
          <button className="banner_info" onClick={togglePopup}>
            <HelpOutlineIcon fontSize="large" />
            <span className="button_text" >More info</span>
          </button>
        </div>
      </div>
      <div className="banner_fadeBottom" />
      {isOpen && <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        handleClose={togglePopup}
        popupStatus={isOpen}
      />}
      {trailerUrl && <Youtube videoId={trailerUrl}/>}
    </header>
  );
}

export default Banner;
