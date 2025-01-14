import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length,setlength]=useState(8);
  const [isNumber,setNumber]=useState(false);
  const [isCharacter,setCharacter]=useState(false);
  const [Password,setPassword]=useState("");

  //useRef hook
  const passref=useRef(null)

  const copyPasswordtoclip=useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(Password);
  },[Password])

  const passGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumber) str+="0123456789"
    if(isCharacter)str+="!@#%&*?|{}"

    for(let i=1;i<=length;i++){
      let charIndex=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(charIndex);
    }
    setPassword(pass);

  },[length,isNumber,isCharacter,setPassword])

  useEffect(()=>{passGenerator()},[length,isNumber,isCharacter,passGenerator]);

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-4xl text-center  text-white mb-4'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hiddden mb-4'> 
    <input type="text" value={Password} className='outline-none w-full py-1 px-3 mb-4 rounded-xl' placeholder='Password' ref={passref} readOnly/>
    <button className='outline-none bg-blue-700 mx-3 mb-2 px-3 py-0.5 shrink-0 text-white' onClick={copyPasswordtoclip}>Copy</button>
    </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
        onChange={(e) => {
          console.log(e);
          setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNumber}
          id="numberInput"
          onChange={() => {
            setNumber((prev) => !prev); //reverts back to previous state
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={isCharacter}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div> 
    </div>
    </div>
    </>
  )
}

export default App
