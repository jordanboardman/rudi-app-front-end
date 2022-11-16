import React from 'react'
import Navbar from '../Navbar'

const BaseLayout = (props) => {
  return (
    <>

      <Navbar />
      <Footer />

      {props.children}
    </>
  )
}

export default BaseLayout