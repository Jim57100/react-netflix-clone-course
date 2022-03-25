import React from "react";
import Grid from "@mui/material/Grid";
import "./css/WhosWatching.css";
import Link from "@material-ui/core/Link";

const WhosWatching = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ color: "white", fontSize: "25px", mt: "15%" }}
      >
        <h1>Who is watching ?</h1>
      </Grid>
      <Grid
        direction="row"
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Link href="/browse">
            <img
              src="./images/avatar_yellow.png"
              alt="avatar_yellow"
              className="avatar"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link href="/browse">
            <img
              src="./images/avatar_dark.png"
              alt="avatar_dark"
              className="avatar"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link href="/browse">
            <img
              src="./images/avatar_green.png"
              alt="avatar_green"
              className="avatar"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link href="/browse">
            <img
              src="./images/avatar_moustache.png"
              alt="avatar_moustache"
              className="avatar"
            />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default WhosWatching;
