import React, { useState, useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ charData, setCharData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
        .then(response =>{
            setCharData(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
  }, [])
  return (
    <div className='app'>
      <Character charProps={charData}/>
    </div>
  )
}

export default App;