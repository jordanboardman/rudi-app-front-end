import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Box} from '@mui/material'

const Navbar = () => {
  return (
    <AppBar
        position="static"
        sx={{background: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'space-between'}}>
        <Toolbar
        sx={{display: 'flex',
        backgroundColor: "#2B2C42",
        justifyContent:'left'
        }}>
        <Box>
          <img
            src="./Logos/Logo_Dark Background.png"
            alt="rudi logo"
            className="logo"
          />
        </Box>
            <Typography sx={{ display:'flex', padding:'10px', fontWeight:'bold'}}>
                <Link to="/" className="link">Rudi</Link>
            </Typography>

            <Typography sx={{display:'flex', padding:'10px', fontWeight:'bold'}}>
                <Link to="/about" className="link">About</Link>
            </Typography>

            <Typography sx={{display:'flex', padding:'10px', fontWeight:'bold'}}>
                <Link to="/students" className="link">Students</Link>
            </Typography>

            <Typography sx={{display:'flex', padding:'10px', fontWeight:'bold'}}>
                <Link to="/teachers" className="link">Teachers</Link>
            </Typography>
        </Toolbar>

    </AppBar>
  )
}

export default Navbar