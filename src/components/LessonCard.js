import React from 'react'
import AssignmentSubmit from './AssignmentSubmit'
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material'

const LessonCard = () => {
  return (
    <Card sx={{maxWidth: 345, marginTop: 10}}>
        <CardHeader
        title="Rudiment Name"
        subheader="More info here" />
        <CardMedia
        component="img"
        width="345"
        image='https://vicfirth.zildjian.com/media/amasty/blog/16_1.png'
        alt='rudiment name' />
        <CardContent>
            <AssignmentSubmit />
        </CardContent>

    </Card>
  )
}

export default LessonCard