import "./css/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import { wrap } from "module";

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container>
        <Grid container direction="row">
          <Grid><FacebookIcon fontSize="large" /></Grid>
          <Grid><InstagramIcon fontSize="large"/></Grid>
          <Grid><TwitterIcon fontSize="large"/></Grid>
          <Grid><YouTubeIcon fontSize="large"/></Grid>
        </Grid>
        <Box style={{ marginLeft: 100}}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={4}  className="footer_link">
              Audio and subtitles
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Press
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Confidientiality
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Contact us
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Audio descriptions
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Investors relationship
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Legal informations
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              Help center
            </Grid>
            <Grid item xs={12} md={4} className="footer_link">
              about us
            </Grid>
          </Grid>
        </Box>
        </Grid>
      <div className="footer__copy">Netflix Clone - All rights reserved</div>
    </footer>
  );
};

export default Footer;
