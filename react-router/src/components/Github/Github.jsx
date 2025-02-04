import React from 'react'
import {useLoaderData} from "react-router-dom"

function Github() {
    const data= useLoaderData();
  return (
    <div>
      Narens followers :{data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response = await fetch('https://api.github.com/users/crazypunk08')
    return response.json();
}
