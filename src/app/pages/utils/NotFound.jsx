import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <React.Fragment>
      <span>Page Not Found</span>
      <br/>
      <Link to="/">Back to Home</Link>
    </React.Fragment>
  )
}
