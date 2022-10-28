import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from '@material-ui/core'

const Home = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/counter" color='secondary'>Counter</Link>
    </div>
  )
}

export default Home
