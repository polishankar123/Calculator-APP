import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';
const App = () => {
  const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '420px',
    display: 'block'
  };
  const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
  };
  
  const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
  };
  const btStyle={
    padding: '5px',
    margin: '10px'
  }

  //Hooks and Event handlers
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const changeHandler = (e) =>{
   setInput(e.target.value)
  }
  
  return(
    <div>
      <Header />
      <center style={formStyle}>
      
      <input type="text"  style={inputStyle} name="input" value={input} onChange={changeHandler}/><br />
      <button style={submitStyle} onClick={()=>setResult(eval(input))}>Result</button>
      <h4>Total is: {result}</h4>
      
      <button style={btStyle} onClick={()=>setInput(input+'1')}>1</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'2')}>2</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'3')}>3</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'4')}>4</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'5')}>5</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>

      <button style={btStyle} onClick={()=>setInput(input+'6')}>6</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'7')}>7</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'8')}>8</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'9')}>9</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={btStyle} onClick={()=>setInput(input+'0')}>0</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
       
      <button style={btStyle} onClick={()=>setInput(input+'+')}>+</button>
      <button style={btStyle} onClick={()=>setInput(input+'-')}>-</button>
      <button style={btStyle} onClick={()=>setInput(input+'*')}>*</button>
      <button style={btStyle} onClick={()=>setInput(input+'/')}>/</button>
      <button style={btStyle} onClick={()=>setInput('')}>Clear</button><br/>

      </center>
      <Footer />
    </div>
  )
}

export default App;
