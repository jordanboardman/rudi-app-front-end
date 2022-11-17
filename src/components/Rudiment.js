import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActionArea, Container } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Rudiment() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card sx={{ maxWidth: 345, backgroundColor: "#2B2C42" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#EDF2F4" }} aria-label="recipe">
                &#129345;
              </Avatar>
            }
            title="Single Stroke Roll"
            subheader="Easy"
            sx={{ color: "#EDF2F4" }}
          />
          <CardMedia
            component="img"
            height="194"
            image="https://vicfirth.zildjian.com/media/amasty/blog/1.png"
            alt="Single Stroke Roll Notation"
          />
          <CardContent>
            <Typography variant="body2" color="#EDF2F4">
              Even drummers with 0% knowledge of rudiments understand this one
              and tend to play it naturally. This less a rudiment and more so a
              natural drumming pattern that dates back as far as humans have
              played drums. Think cavemen around the fire! Yep, they played this
              one.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color="error" />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph color="#EDF2F4">
                Pro Tip:
              </Typography>
              <Typography paragraph color="#EDF2F4">
                This is the most basic of rudiments, but that doesn't
                *necessarily* mean that it's easy! As you increase tempo and
                rate of movement, the difficulity also increases.
              </Typography>
              <Typography paragraph color="#EDF2F4">
                Start Slow!
              </Typography>
              <Typography paragraph color="#EDF2F4">
                Bpm Range: 60-160
              </Typography>
              <Typography color="#EDF2F4">Have fun!</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Container>
          <Card sx={{ maxWidth: 445, backgroundColor: "#2B2C42" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/PhotoAssets/singlestrokeroll.png"
                alt="Single Stroke Role Notation"
              />
              <CardContent>
                <Typography
                  color="#EDF2F4"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Single Stroke Roll
                </Typography>
                <Typography color="#EDF2F4" variant="body2">
                  Even drummers with 0% knowledge of rudiments understand this
                  one and tend to play it naturally. This less a rudiment and
                  more so a natural drumming pattern that dates back as far as
                  humans have played drums. Think cavemen around the fire! Yep,
                  they played this one.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
    </>
  );
}
