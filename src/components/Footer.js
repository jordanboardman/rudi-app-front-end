import React from "react";
import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        zIndex: "1",
        backgroundColor: "#2B2C42",
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <img
            src="./Logos/Logo_Dark Background.png"
            alt="rudi logo"
            className="logo"
          />
        </Box>
        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/" className="link">
            Home
          </Link>
        </Typography>

        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/about" className="link">
            About
          </Link>
        </Typography>
        {/* Below still needs to connect to react-router once the Rudiments page is made and added. */}
        <Typography sx={{ fontWeight: "bolder" }}>
          <Link to="/rudiments" className="link">
            Rudiments!
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
