import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

const ClassCodeEntry = ({user, handleCode}) => {

  if (user == 'student'){
    return (
        <>
        <TextField
         label="Class Code"
         onChange={e=>{handleCode(e.target.value)}}>
        </TextField>
        </>
      )
  }
}

export default ClassCodeEntry