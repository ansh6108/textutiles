

import './App.css';
import Navbar from './Navbar';
import TextForm from'./TextForm';
import React, { useState  } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    
    <Navbar title="Textitulies"  mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
          <TextForm heading="ENTER THE TEXT"/>
        </div>
    </>
    
  );
}
export default App;