import React from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
import "./css/Details.css";

interface MovieInterface {
  title: string;
  name: string;
  original_name :string;
  overview :string;
  backdrop_path :string;
}

const Details = () => {

  const location = useLocation() ;
  const movie = location.state as MovieInterface;

  return (
    <div>
      <Navbar />
      <>
        <header
          className="detailsScreen"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="detailsScreen_contents">
            <h1 className="detailsScreen_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="detailsScreen_buttons">
              <button className="detailsScreen_button">Play</button>
              <button className="detailsScreen_button">My List</button>
            </div>
            <h1 className="detailsScreen_desc">{movie.overview}</h1>
          </div>
        </header>
      </>
    </div>
  );
}

export default Details;