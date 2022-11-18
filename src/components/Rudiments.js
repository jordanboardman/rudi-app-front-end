import React from "react";
import Rudiment from "./Rudiment";
import { Box, Typography } from "@mui/material";

const Rudiments = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "#2B2C42",
            margin: "17px",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Level 1
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Rudiment
            link="https://vicfirth.zildjian.com/education/01-single-stroke-roll.html"
            name="Single Stroke Roll"
            summary="Even drummers with 0% knowledge of rudiments understand this
                  one and tend to play it naturally."
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/16-single-paradiddle.html"
            name="Paradiddle"
            summary="If the Paradiddle were a high school student, it would definitely win the *Most Popular* award."
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/07-five-stroke-roll.html"
            name="5 Stroke Roll"
            summary="Be sure to count to 5 and keep the sticking RRLLR (or LLRRL). Try this one out as a fill on the drum set!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/20-Flam.html"
            name="Flam"
            summary="It's a single note! Only, not really..."
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/31-drag.html"
            name="Drag"
            summary="It's 3 notes! But only sorta kinda..."
          />
        </Box>
        <br />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h2" gutterBottom>
            Level 2
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Rudiment
            link="https://vicfirth.zildjian.com/education/06-double-stroke-roll.html"
            name="Double Stroke Roll"
            summary="Obviously fun, but deceivingly difficult..."
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/04-multiple-bounce-roll.html"
            name="Multiple Bounce Roll"
            summary="Also known as the Buzz Roll and Press Roll. Why so many aliases? No one truly knows."
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/19-paradiddle-diddle.html"
            name="Paradiddle-diddle"
            summary="Paradiddle's cool older brother"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/22-flam-tap.html"
            name="Flam Tap"
            summary="Really flows once you get the hang of it"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/21-flam-accent.html"
            name="Flam Accent"
            summary="Another common patten with a twist... a good ol' flam on the downbeats."
          />
        </Box>
        <br />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h2" gutterBottom>
            Level 3
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Rudiment
            link="https://vicfirth.zildjian.com/education/10-nine-stroke-roll.html"
            name="9 Stroke Roll"
            summary="Like the 5 Stroke Roll, but 4 more strokes!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/34-lesson-25.html"
            name="Lesson 25"
            summary="Wait... what were lessons 1-24?!?!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/35-single-dragadiddle.html"
            name="Single Dragadiddle"
            summary="This Dragadiddle is still single, ladies!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/28-swiss-army-triplet.html"
            name="Swiss Army Triplet"
            summary="Don't worry about the Swiss or Army part... just get this one flowing and have fun!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/23-flamacue.html"
            name="Flamacue"
            summary="A classic flammed rudiment with an accent on the upbeat! Good times."
          />
        </Box>
        <br />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h2" gutterBottom>
            Level 4
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "5px",
          }}
        >
          <Rudiment
            link="https://vicfirth.zildjian.com/education/05-triple-stroke-roll.html"
            name="Triple Stroke Roll"
            summary="Hit em' with 3 rights and 3 lefts!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/24-flam-paradiddle.html"
            name="Flam Paradiddle"
            summary="Whatcha get when you put a flam at the beginning of each paradiddle? You guessed it."
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/27-patafla-fla.html"
            name="Pataflafa"
            summary="Which is more fun... playing this rudiment or saying it's name over and over?"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/38-single-ratamacue.html"
            name="Single Ratamacue"
            summary="As opposed to double or triple ratamacues. Don't worry, we'll get there!"
          />
          <Rudiment
            link="https://vicfirth.zildjian.com/education/29-inverted-flam-tap.html"
            name="Inverted Flam Tap"
            summary="Flam Taps's weird younger cousin..."
          />
        </Box>
        <br />
      </Box>
    </>
  );
};

export default Rudiments;
