import React from "react";
import Rudiment from "./Rudiment";
import { Box } from "@mui/material";

const Rudiments = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <Rudiment
          name="Single Stroke Roll"
          summary="Even drummers with 0% knowledge of rudiments understand this
                  one and tend to play it naturally."
        />
        <Rudiment
          name="Paradiddle"
          summary="If the Paradiddle were a high school student, it would definitely win the *Most Popular* award."
        />
        <Rudiment
          name="5 Stroke Roll"
          summary="Be sure to count to 5 and keep the sticking RRLLR (or LLRRL). Try this one out as a fill on the drum set!"
        />
        <Rudiment
          name="Flam"
          summary="It's a single note! Only, not really..."
        />
        <Rudiment name="Drag" summary="It's 3 notes! But only sorta kinda..." />
      </Box>
    </>
  );
};

export default Rudiments;
