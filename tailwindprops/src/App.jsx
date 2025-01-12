import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-300 rounded-xl mb-3'>Hi Tailwind</h1>
    <Card username="Naren"/>
    <Card username="Naruto"/>
    </>
  )
}

export default App
