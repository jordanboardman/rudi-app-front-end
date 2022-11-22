import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"


const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  

  const handleLogin = e => {
    e.preventDefault();
    try{
      console.log('in the try')
     fetch('http://localhost:3001/checkpassword',{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:username, 
        password:password
      })
    })
      .then(res => {return res.json()})
      .then(status => {
        console.log(status)
        console.log('in status')
      if(status === '200'){
        navigate("/")
      }
      else if(status === '404'){
        navigate("/login")
        }
      })
    }
    catch (error) {
      console.log('in the catch')
      navigate("/login")
    }
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
          onChange={e=>{setUsername(e.target.value)}}
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
          onClick={handleLogin}>
            Log-In
          </Button>
      </Box>
      </div>
    </>
  )
}

export default LogIn