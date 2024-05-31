import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SingleItem({currentpost}) {
  const currentLocation = useLocation()
  
  return (<>
  <h1>{currentLocation.pathname}</h1>

</>
  )
}
