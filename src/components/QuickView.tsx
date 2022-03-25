import React, { useEffect, useState, FC } from "react";
import './css/QuickView.css';
import CancelIcon from '@mui/icons-material/Cancel';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuickView: FC<QuickViewInterface> = ({ bannerStyle, movie, handleClose, popupStatus }) => {
 console.log('movie: ', movie)
  return (
    <div className={`quickView ${popupStatus && "open"}`}>
      <div className="quickView_banner" style={bannerStyle}>
        <button className="quickView_close" onClick={() => handleClose()}>
          <CancelIcon fontSize="large" />
        </button>
        <div className="detail_buttons">
          <h2 className="quickView_banner_title">{movie?.title || movie?.name || movie?.original_name}</h2>
          <div className="button_group">
            <Link to={`/video/${movie?.id}`}>
              <button className="banner_play">
                <PlayArrowIcon fontSize="large"/><span className="button_text">Play</span>
              </button>
            </Link>
            <AddCircleOutlineIcon fontSize="large"/>
            <div className="thumb_up">
              <ThumbUpOffAltIcon fontSize="medium"/>
            </div>
            <div className="thumb_down">
              <ThumbDownOffAltIcon fontSize="medium"/>
            </div>
          </div>
        </div>
        <div className="quickView_content">
          <Grid container rowSpacing={2}>
            <Grid item>
              <Typography>
                {(movie?.release_date).slice(0,4)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {movie?.vote_average}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
              <Typography>
            {movie?.overview}
            </Typography>
            </Grid>
          <h3>Similar titles</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  hello
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );

}

export default QuickView;