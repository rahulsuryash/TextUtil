import React from 'react'
import { About } from './Components/About'
import { useState } from 'react'
import Nav from "./Components/Nav"
import { TextForm } from './Components/TextForm'





const App = () => {


  
  const [mode, setmode] = useState('light');
  let toggleMode=()=>{
    if(mode==='dark')
    {
      setmode('light')
      document.body.style.backgroundColor='white'
      
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='grey'
      
    }
  }
 
  return (
    <div >
    <Nav title="Text util" about="about us" mode={mode} toggleMode={toggleMode}/>
    <TextForm title="Enter the text to analyze" mode={mode} />
    <About mode={mode}/>
       
    </div>
  )
}

export default App
