import React, {useState} from 'react'
import LessonCard from './LessonCard'
import rudimentList from '../rudimentList'

const Dashboard = () => {
  const originalRudiments = rudimentList()
  const [rudiments, setRudiments] = useState(originalRudiments)
  const handleSubmit = (id) => {
    const newRudiments = rudiments.filter(rudiment => {return (rudiment.id !== id)})
    setRudiments(newRudiments)
  }
  return (
    <div className="studentDash">
    {rudiments.map(rudiment => {
      return <LessonCard rudiment={rudiment} onSubmit={handleSubmit} id={rudiment.id} />
})}
    </div>
  )
}

export default Dashboard