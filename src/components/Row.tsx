import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/Row.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import QuickView from "./QuickView";

interface RowInterface {
  title: string;
  fetchURL: string;
  isPoster: boolean;
}

interface MovieInterface {
  id: number;
  title: string;
  name?: string;
  original_name?: string;
  overview?: string;
  poster_path: string;
  backdrop_path: string;
}

const Row = ({ title, fetchURL, isPoster }: RowInterface) => {

  
  const img_base: string = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState<Array<MovieInterface>>([]);
  const [movie, setMovie] = useState<MovieInterface>();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("${img_base}/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
  };

  return (
    <div className="row swiper">
      <h2 className="row_title">{title}</h2>
      <div className="row_images">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
        >
          {movies?.map((movie: MovieInterface, key) => (
            <SwiperSlide key={key}>
              <div key={key}>
                  <img
                    onClick={togglePopup}
                    src={
                      isPoster
                        ? `${img_base}/${movie.poster_path}`
                        : `${img_base}/${movie.backdrop_path}`
                    }
                    className="row_image"
                    alt={movie?.title || movie?.name || movie?.original_name}
                  />
              </div>
              {isOpen && <QuickView
                bannerStyle={bannerStyle}
                movie={movies[key]}
                handleClose={togglePopup}
                popupStatus={isOpen}
              />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Row;
