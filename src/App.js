import logo from './logo.svg';
import './App.css';
import {CONSTANTS} from './Const';
import React , {useState, useEffect} from 'react';

function App() {
  const [joke, setJoke] = useState('');
  
  const changeJoke = () => {
    fetch(CONSTANTS.API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke))
  }

  useEffect(() => {
    changeJoke();
  }, [])



  return (
    <div className="box">
      <h1>This is a Joke Generator</h1> 
      <p dangerouslySetInnerHTML={{__html: joke}} />
      <button onClick={changeJoke}>Generate joke</button>
    </div>

  );
}

export default App;
