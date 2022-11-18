import React, {useEffect, useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ClassCodeEntry from './ClassCodeEntry';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')
  const [code, setCode] = useState('')
  const [users, setUsers] = useState(false);
  
  // const createUser = e => {
  //   e.preventDefault()
  //   console.log(email)
  //   console.log(password)
  //   console.log(userType)
  //   console.log(code)
  // }

  // const handleCode = (code) => {
  //   setCode(code)
  // }

  
  useEffect(() => {
    createUser();
  }, []);
  function createUser() {
    let username = email;
    let password = password;
    let role = userType;
    let code = code;
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password, role, code}),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        alert(data);
        getUsers();
      });
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
          <br/>
         
          <TextField 
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={e=>{setPassword(e.target.value)}}
          />
          <br/>

          <FormControl>
            <FormLabel 
            id="user-type-radio-label"
            sx={{'&.Mui-focused': {
              color: '#E13C45'
            }}}>
              Account Type
            </FormLabel>
            <RadioGroup
            name="user-type-radio-group"
            onChange={e=>{setUserType(e.target.value)}}>
              <FormControlLabel 
              value="student" 
              control={<Radio 
                sx={{color: '#E13C45',
              '&.Mui-checked' : {
                color: '#E13C45'
              }}}/>} 
              label="Student" />
              <FormControlLabel 
              value="teacher" 
              control={<Radio 
                sx={{color: '#E13C45',
              '&.Mui-checked' : {
                color: '#E13C45'
              }}}/>} 
              label="Teacher" />
            </RadioGroup>
          </FormControl>
          <br/>

          <ClassCodeEntry user={userType} handleCode={handleCode} />
          <br />
          
          <Button
          variant="contained"
          sx={{backgroundColor: '#E13C45',
        borderRadius: '52px'}}
          onClick={createUser}>
            Register
          </Button>
        </Box>
      </div>
    </>
  )
}

export default Register