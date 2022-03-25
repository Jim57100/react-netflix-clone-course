import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Requests from "../api/Axios";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={Requests.fetchNetflixOriginals}
        isPoster={true} />
      <Row
        title="Trending Now"
        fetchURL={Requests.fetchTrending}
        isPoster={false} />
      <Row
        title="Top Rated"
        fetchURL={Requests.fetchTopRated}
        isPoster={false} />
      <Row
        title="Thriller Movies"
        fetchURL={Requests.fetchThrillerMovies}
        isPoster={false} />
      <Row
        title="Comedy Movies"
        fetchURL={Requests.fetchComedyMovies}
        isPoster={false} />
      <Row
        title="Horror Movies"
        fetchURL={Requests.fetchHorrorMovies}
        isPoster={false} />
      <Row
        title="Romance Movies"
        fetchURL={Requests.fetchRomanceMovies}
        isPoster={false} />
      <Row
        title="Animation Movies"
        fetchURL={Requests.fetchAnimationMovies}
        isPoster={false} />
      <Row
        title="Most popular TV series"
        fetchURL={Requests.mostPopularTvReq}
        isPoster={false} />
      <Row
        title="Top rated TV series"
        fetchURL={Requests.topRatedTvReq}
        isPoster={false} />
      <Footer />
    </div>
  );
};

export default Home;
