import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AddColor from './components/AddColor';
import DisplayBox from './components/DisplayBox';

function App() {

  const [currentColor, setCurrentColor] = useState([])

  const selectedColor = (showColor) => {
    setCurrentColor([...currentColor, showColor])
    console.log(currentColor)
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <AddColor newColor={selectedColor}></AddColor>
      <DisplayBox current={currentColor}></DisplayBox>
    </div>
  );
}

export default App;
