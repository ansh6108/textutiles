import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked" +  text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleDownClick = ()=>{
    console.log("loowercase was clicked" +  text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    console.log("clearcase was clicked" +  text);
    setText('');
  }
  const handleOnChange =(event)=>{
    console.log("on change");
    setText(event.target.value)
  }
  const [text, setText] = useState('enter the text3');
  
  
  
  return (
    <>
    <div classNAME="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
    
    <textarea className="form-control"  value={text} onChange={handleOnChange} id="CONVENTER BOX" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleDownClick}>convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>convert to clearcase</button>
    </div>
    <div className="container my-3">
      <h1>YOUR TEXT SUMMARY </h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split("").lenght} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  )
}
