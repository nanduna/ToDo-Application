import React, { useState } from 'react';
import './Create.css';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState()
  const Add = () =>{
    axios.post("http://localhost:5000/add", {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className="create-container">
      <input className="create-input" type="text" onChange={(e)=> setTask(e.target.value)}/>
      <button className="create-button" onClick={Add}>
        Add
      </button>
    </div>
  );
}

export default Create;
