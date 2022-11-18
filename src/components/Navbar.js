import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          backgroundColor: "#2B2C42",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ paddingRight: "62%" }}>
          <img
            src="./Logos/Logo_Dark Background.png"
            alt="rudi logo"
            className="logo"
          />
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ display: "flex", padding: "10px", fontWeight: "bold" }}
          >
            <Link to="/" className="link">
              Home
            </Link>
          </Typography>

          <Typography
            sx={{ display: "flex", padding: "10px", fontWeight: "bold" }}
          >
            <Link to="/about" className="link">
              About
            </Link>
          </Typography>

          <Typography
            sx={{ display: "flex", padding: "10px", fontWeight: "bold" }}
          >
            <Link to="/students" className="link">
              Students
            </Link>
          </Typography>

          <Typography
            sx={{ display: "flex", padding: "10px", fontWeight: "bold" }}
          >
            <Link to="/teachers" className="link">
              Teachers
            </Link>
          </Typography>

          <Typography
            sx={{ display: "flex", padding: "10px", fontWeight: "bold" }}
          >
            <Link to="/rudiments" className="link">
              Rudiments!
            </Link>
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
