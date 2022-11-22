import React from 'react'
import AssignmentSubmit from './AssignmentSubmit'
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material'

const LessonCard = ({rudiment}) => {
  return (
    <Card sx={{maxWidth: 345, marginTop: 10, marginLeft: 5}}>
        <CardHeader
        title={rudiment.name}/>
        <CardMedia
        component="img"
        width="345"
        image={rudiment.img}
        alt={rudiment.name} />
        <CardContent>
            <AssignmentSubmit />
        </CardContent>

    </Card>
  )
}

export default LessonCard