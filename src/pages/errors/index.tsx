import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound: React.FC = () => {
  const location = useLocation()
  return (
    <h3>
      {location.pathname}
      {' '}
      Not Found!
    </h3>
  )
}

export default NotFound
