import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  return (
      <div className='container'>
        <input placeholder='Your something'  onChange={x=>setName(" "+x.target.value)}></input>
        <div style={{display:'flex', maxWidth:"75vw", wordBreak:'break-word', textAlign:"center"}}><h1>Hello{name}!</h1></div>   
      </div>
  )
}

export default App
