import React from 'react'
import { useState } from 'react'

export const TextForm = (props) => {

  const [text, setText] = useState('')

  const handleUpClick = () => {
     let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () => {
    let newText=text.toLowerCase();
   setText(newText)
 }

 const handleClear = () => {
 
 setText("")
}

const handleOnChange=(event)=>{  
  setText(event.target.value)
}

const handleCopy=()=>{
  let newtext=document.getElementById("myBox")
  navigator.clipboard.writeText(newtext.value)
}
const handleSpaces=()=>{
  let newtext=text.split(/[ ]+/)
  setText(newtext.join(" "))


}


  return (
    <div>
      <div className="container my-3">

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1 >{props.title}</h1></label>
          <textarea className="form-control" style={{background:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="15" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper case</button>
        
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Extra spaces</button>
      

      </div>
      <div className="container">
        <h1>Text summary</h1>
        <p>
        {text.split(" ").length} worlds and {text.length} charater
        </p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>PREVIEW</h2>
        <p>{text.length>0?text:"write somthing in above box for preview"}</p>
      </div>

    </div>
  )
}
