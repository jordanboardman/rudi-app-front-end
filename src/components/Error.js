import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const card = (
  <React.Fragment>
    <CardContent sx={{ display: "flex", justifyContent: "center" }}>
      <Typography sx={{}} variant="h5" component="div">
        Oops! Looks like you've encountered an error... keep practicing!
      </Typography>
    </CardContent>
    <CardActions sx={{ display: "flex", justifyContent: "center" }}>
      <Link to="/" underline="none" className="link">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
        >
          Back to Rudi
        </Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function Error() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
