import axios from "axios";
import { useEffect, useState } from "react";
import {SingleMovieCard, MoviePagination} from "../index";
import "./Trending.scss";


const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <span className="trending-title">Trending Today:</span>
      <div className="trending-container">
        {content &&
          content.map(item => (
            <SingleMovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>
      <MoviePagination setPage={setPage} />
    </>
  );
}

export default Trending;