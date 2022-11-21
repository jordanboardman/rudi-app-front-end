import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";

export default function MediaCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "100px",
        }}
      >
        <Card sx={{ maxWidth: 345, backgroundColor: "#2B2C42" }}>
          <CardMedia
            component="img"
            height="340"
            image="/Headshots/mattsummers-headshot-Small.png"
            alt="Matt Summers Head Shot"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#EDF2F4"
            >
              Matt Summers
            </Typography>
            <Typography variant="body2" color="#EDF2F4">
              Role: Full Stack Developer
              <br />
              From: West Virginia
              <br />
              Loves: Theater
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://www.linkedin.com/in/msummx/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Linkedin
            </Button>
            <Button
              href="https://github.com/msummx"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Github
            </Button>
            <Button
              href="https://msummx.netlify.app/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Portfolio
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: "#2B2C42" }}>
          <CardMedia
            component="img"
            height="340"
            image="Headshots/headshot-cropped.jpeg"
            alt="Jordan Boardman Head Shot"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#EDF2F4"
            >
              Jordan Boardman
            </Typography>
            <Typography variant="body2" color="#EDF2F4">
              Role: Full Stack Developer + Rudi Creator
              <br />
              From: Tennessee
              <br />
              Loves: Drumming
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://www.linkedin.com/in/jordanboardman/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Linkedin
            </Button>
            <Button
              href="https://github.com/jordanboardman"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Github
            </Button>
            <Button
              href="https://jordanboardmandev.netlify.app/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Portfolio
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 345, backgroundColor: "#2B2C42" }}>
          <CardMedia
            component="img"
            height="340"
            image="/Headshots/287C80B8-6737-4CCB-A521-F1E3782FBAF7.JPG"
            alt="Fiona Eckert Head Shot"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#EDF2F4"
            >
              Fiona Eckert
            </Typography>
            <Typography variant="body2" color="#EDF2F4">
              Role: Full Stack Developer
              <br />
              From: Missouri
              <br />
              Loves: Coffee
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://www.linkedin.com/in/fiona-eckert/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Linkedin
            </Button>
            <Button
              href="https://github.com/fionaeckert"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Github
            </Button>
            <Button
              href="https://www.fionaeckert.com/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Portfolio
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: "#2B2C42" }}>
          <CardMedia
            component="img"
            height="340"
            image="Headshots/Abby-cropped.jpeg"
            alt="Abby Drozd Head Shot"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#EDF2F4"
            >
              Abby Drozd
            </Typography>
            <Typography variant="body2" color="#EDF2F4">
              Role: UI/UX Desiger + Community Outreach
              <br />
              From: South Carolina
              <br />
              Loves: Dogs
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://www.linkedin.com/in/abby-drozd-0997411b1/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Linkedin
            </Button>
            <Button
              href="https://www.abbydrozddesigns.com/"
              target="_blank"
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
            >
              Portfolio
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
