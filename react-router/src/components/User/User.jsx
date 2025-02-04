import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const { userid } = useParams(); //You need to Destructure it
  return (
    <div>
      User : {userid}
    </div>
  )
}

export default User
