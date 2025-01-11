import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(15)
  
  let addvalue=()=>{
    count=count+1;
    setCount(count);
    console.log(count);
  }
  let updatevalue=()=>{
    count--;
    if(count>=0){
      setCount(count);
    }
    else{
      count++;
    }
    console.log(count);
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value:{count}</h2>
     <button onClick={addvalue}> Update value</button>
     <br />
     <button onClick={updatevalue}>Remove value</button>
    </>
  )
}

export default App
