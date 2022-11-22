
import React, {useState} from 'react'
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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')
  const [code, setCode] = useState('')

const handleCode = (code) => {
  setCode(code)
}

  function createUser(e) {
    e.preventDefault();
    fetch('http://localhost:3001/createuser',{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:username, 
        password:password,
        role:userType,
        code:code})
      })
      .then(res => res.text(), console.log('in response'))
      .then(data => console.log(data))
      .catch(err => console.log(err))
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TextField 
          id="outlined-email"
          label="Email"
          onChange={e=>{setUsername(e.target.value)}}
          />
          <br />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <FormControl>
            <FormLabel
              id="user-type-radio-label"
              sx={{
                "&.Mui-focused": {
                  color: "#E13C45",
                },
              }}
            >
              Account Type
            </FormLabel>
            <RadioGroup
            name="user-type-radio-group"
            onChange={e=>{setUserType(e.target.value)}}
            >
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
          <br />

          <ClassCodeEntry user={userType} handleCode={handleCode} onChange={e=>{setCode(e.target.value)}} />
          <br />

          <Button
            variant="contained"
            sx={{ backgroundColor: "#E13C45", borderRadius: "52px" }}
            onClick={createUser}
          >
            Register
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Register;
