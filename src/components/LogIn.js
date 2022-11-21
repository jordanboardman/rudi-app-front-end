import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = e => {
    e.preventDefault()
    console.log(email)
    console.log(password)
  }
  return (
    <>
      <div className="login">
      <Box
      component="form"
      autoComplete="off"
      sx={{
        width: 300,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
      >
          <TextField 
          id="outlined-email"
          label="Email"
          onChange={e=>{setEmail(e.target.value)}}
          />
         
          <TextField 
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={e=>{setPassword(e.target.value)}}
          />
          
          <Button
          variant="contained"
          sx={{backgroundColor: '#E13C45',
          borderRadius: '52px'}}
          onClick={handleClick}>
            Log-In
          </Button>
      </Box>
      </div>
    </>
  )
}

export default LogIn