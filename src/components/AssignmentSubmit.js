import React from 'react'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AssignmentSubmit = () => {
  return (
    <div className="login"><Box 
    component="form"
    autoComplete="off"
    sx={{
    }}
    >
        <FormControl>
            <FormLabel>
                Assignment YouTube URL
            </FormLabel>
            <br />
            <TextField
            sx={{width: 325}} />
            <br />
            <Button>Submit</Button>
        </FormControl>
    </Box></div>
  )
}

export default AssignmentSubmit