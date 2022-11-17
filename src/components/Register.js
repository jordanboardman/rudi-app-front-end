import React, {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student')
  const handleClick = e => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    console.log(userType)
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

          <FormControl>
            <FormLabel id="user-type-radio-label">Account Type</FormLabel>
            <RadioGroup
            name="user-type-radio-group"
            onChange={e=>{setUserType(e.target.value)}}>
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
            </RadioGroup>
          </FormControl>
          
          <Button
          variant="contained"
          onClick={handleClick}>
            Register
          </Button>
        </Box>
      </div>
    </>
  )
}

export default Register