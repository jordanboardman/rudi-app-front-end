import React from 'react'
import LessonCard from './LessonCard'
import rudimentList from '../rudimentList'

const Dashboard = () => {
  const rudiments = rudimentList()
  return (
    <div className="studentDash">
    {rudiments.map(rudiment => {
      return <LessonCard rudiment={rudiment} id={rudiment.id} />
    })}
    </div>
  )
}

export default Dashboard