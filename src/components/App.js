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
            pt: 20,
            pb: 20,
            backgroundImage:'/Photo Assets/drum-sticks-drumming-beat-rhythm-on-drum-surface-w-2021-09-09-17-39-38-utc.jpg'
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color='#2B2C42'
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
              <Button size="large" sx={{borderRadius: '52px', height:'77px', width:'317px', backgroundColor:'#E13C45'}} variant="contained">Learn More</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {/* What is Rudi */}
          <Grid item xs={12} md={6} sx={{pb: 10}}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex'}}>
              <CardMedia
                  component="img"
                  sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
                  src='/Photo Assets/a-boy-enjoys-music-playing-the-drum-set-2021-09-24-04-29-01-utc.jpg'
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5" sx={{fontSize:'62px', fontWeight:'bold', color:'#2B2C42'}}>
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
                  <Typography component="h2" variant="h5" sx={{fontSize:'62px', fontWeight:'bold', color:'#2B2C42'}}>
                   Who It's For
                  </Typography>
          </CardContent>
          <Grid container rowSpacing={1}>
              <Grid xs={4} sx={{padding:'10px'}}>
                <Card sx={{ backgroundColor: '#8D99AE22', color:'#2B2C42', display: 'flex', flexWrap:'wrap', flexDirection: 'row', borderRadius:'20px', justifyContent:'center'}}>
                    <CardMedia
                      component="img"
                      sx={{
                        height:'90px',
                        width:'90px',
                        display:'flex',
                        marginTop:'10px'
                      }}
                      image="Logos/bass-clef.png"
                      alt="music note"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" sx={{display:'flex', justifyContent:'center', paddingRight:'10px', color:'#2B2C42'}}>
                        Students
                      </Typography>
                      <Typography>
                      Rudi provides students a fun and engaging way to enhance their basic drumming necessities. Progression-based learning, mastery rewards, and bonus content make for a productive training program. The excitement of completion rewards and bonus content enhance interest in learning the skills of rudiments.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={4} sx={{padding:'10px'}}>
                  <Card sx={{ backgroundColor: '#8D99AE22', color:'#2B2C42', display: 'flex', flexWrap:'wrap', flexDirection: 'row', borderRadius:'20px', justifyContent:'center' }}>
                  <CardMedia
                      component="img"
                      sx={{
                        height:'90px',
                        width:'90px',
                        display:'flex',
                        marginTop:'10px'
                      }}
                      image="Logos/drumsticks.png"
                      alt="music note"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" sx={{display:'flex', justifyContent:'center', color:'#2B2C42'}}>
                        Private Teachers
                      </Typography>
                      <Typography>
                      Rudi was created out of a need for instructors to find a fun and engaging way to teach their students rudiments. By using this tool, private lesson teachers have a fun progression based learning tool at their fingertips. It’s an excellent way to track your student’s progress and grasp on the concepts.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={4} sx={{padding:'10px'}}>
                <Card sx={{ backgroundColor: '#8D99AE22', color:'#2B2C42', display: 'flex', flexWrap:'wrap', flexDirection: 'row', borderRadius:'20px', justifyContent:'center' }}>
                  <CardMedia
                      component="img"
                      sx={{
                        height:'90px',
                        width:'90px',
                        display:'flex',
                        marginTop:'10px'
                      }}
                      image="Logos/stave.png"
                      alt="music note"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" sx={{display:'flex', justifyContent:'center', color:'#2B2C42'}}>
                        School Teachers
                      </Typography>
                      <Typography>
                      Rudi is also there for school teachers and band directors who need a reliable source to help their percussion students learn drumming essentials. This enables educators without a primary percussion background to more efficiently teach content that would normally be difficult concepts for students to grasp.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            </Grid>
            {/* end who is Rudi for */}
            {/* Start how it works */}
          <CardContent sx={{ flex: 1, display: 'flex', justifyContent:"center", pt:10}}>
                  <Typography component="h2" variant="h5" sx={{fontSize:'62px', fontWeight:'bold', color:'#2B2C42'}}>
                   How It Works
                  </Typography>
          </CardContent>
            <Stack spacing={2} sx={{pb: 18, display:'flex'}}>
                    <Item sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
                      <img src="/Logos/equalizer.png" alt="equalizer"/>
                      Progression-based learning
                      </Item>
                    <Item sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
                      <img src="/Logos/medal.png" alt="medal" />
                      Reward program
                    </Item>
                    <Item sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
                      <img src="/Logos/rock.png" alt="rock" />
                      Bonus levels to further skillsets
                    </Item>
            </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}