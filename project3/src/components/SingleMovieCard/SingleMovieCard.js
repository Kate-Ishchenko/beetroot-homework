import { Badge } from '@mui/material';
import { img_300, unavailable } from "../../config/config";
// import ContentModal from "../ContentModal/ContentModal";
import "./SingleMovieCard.scss";

const SingleMovieCard = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
  }) => {
    return (
    //   <ContentModal media_type={media_type} id={id}>
    <div className='movie-card-container'>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="movie-card-poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="movie-card-title">{title}</b>
        <span className="movie-card-subtitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
        </div>
    //   </ContentModal>
    );
  };

export default SingleMovieCard;