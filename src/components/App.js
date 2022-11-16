import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottom: '20px',
  fontSize: '39px'

}));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              LEARN THE BASICS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Helping students master the building blocks of rudiments
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button size="large" sx={{borderRadius: 10}} variant="contained">Learn More</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {/* What is Rudi */}
          <Grid item xs={12} md={6} >
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex'}}>
              <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                  // image={post.image}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5" sx={{fontSize:'62px', fontWeight:'bold'}}>
                    What Is Rudi?
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                  Rudi is a progression based learning platform which makes learning rudiments a fun and easy game! It can be hard to get students motivated to learn the basics, but Rudi provides a structured learning environment to allow students the chance to master the basics of drumming. Form and technique are essential when first leaning stick work. Rudi lays out a path for students to hear, see, and read the rudiments they are cultivating their rudiment skills.
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
          {/* End what is Rudi */}
          {/* Start who Rudi is for */}
          <CardContent sx={{ flex: 1, display: 'flex', justifyContent:"center"}}>
                  <Typography component="h2" variant="h5" sx={{fontSize:'62px', fontWeight:'bold'}}>
                   Who It's For
                  </Typography>
          </CardContent>
          <Grid container rowSpacing={1}>
              <Grid xs={4} sx={{padding:'10px'}}>
                <Card sx={{display: 'flex', flexWrap:'wrap', flexDirection: 'row', borderRadius:'20px'}}>
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '20%',
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Students
                      </Typography>
                      <Typography>
                      Rudi provides students with a fun and engaging way to enhance their basic drumming necessities. Progression based learning, mastery rewards, and bonus content make for a productive training program. The excitement of completion rewards and bonus content make for an enhanced interest in learning the needed skills of rudiments.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={4} sx={{padding:'10px'}}>
                  <Card sx={{display: 'flex', flexWrap:'wrap', flexDirection: 'row', borderRadius:'20px' }}>
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '20%',
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Private Lesson Teachers
                      </Typography>
                      <Typography>
                      Rudi was created out of a need for instructors to find a fun and engaging way to teach their students rudiments. By using this tool, private lesson teachers have a fun progression based learning tool at their fingertips. It’s an excellent way to track your student’s progress and grasp on the concepts.                    </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={4} sx={{padding:'10px'}}>
                  <Card sx={{display: 'flex', flexWrap:'wrap', flexDirection: 'row', borderRadius:'20px' }}>
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '20%',
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        School Teachers
                      </Typography>
                      <Typography>
                      Rudi is also there for school teachers and band directors who need a reliable source to help their percussion students learn drumming essentials. This enables educators without a primary percussion background to more efficiently teach content that would normally be difficult concepts for students to grasp.                    </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            </Grid>
            {/* end who is Rudi for */}
            {/* Start how it works */}
          <CardContent sx={{ flex: 1, display: 'flex', justifyContent:"center"}}>
                  <Typography component="h2" variant="h5" sx={{fontSize:'62px', fontWeight:'bold'}}>
                   How It Works
                  </Typography>
          </CardContent>
            <Stack spacing={2}>
                    <Item>Progression based learning</Item>
                    <Item>Reward program</Item>
                    <Item>Bonus levels to further skillsets</Item>
            </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}