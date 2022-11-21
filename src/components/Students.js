import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="#2B2C42"
        gutterBottom
      >
        Check back soon for more!
      </Typography>
      <Link to="/" underline="none" className="link">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E13C45",
            borderRadius: "40px",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "118%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Back Home
        </Button>
      </Link>
    </Container>
  );
};

export default Students;
