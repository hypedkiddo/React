import React,{useState} from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
function App() {
  let herodata=[
    {text1:" Dive into",text2:"What you Love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:" your passions"}, 
  ] //this is just a normal datatype

  const [heroCount,setHeroCount]=useState(2);
  const [playStatus,setplaystatus]=useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setplaystatus={setplaystatus}
        herodata={herodata[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
