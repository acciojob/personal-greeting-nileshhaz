
import {React, useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" onChange={handleChange} value={name} />
      <div>{name}</div>
    </div>
  )
}

export default App
