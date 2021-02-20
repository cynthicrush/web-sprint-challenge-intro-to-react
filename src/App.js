import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Character from './components/Character';
// import styled from 'styled-components';

import {API_ROOT, API_PEOPLE} from './configuration/config'
import './App.css';

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  // const [character, setCharacter] = useState([]);
  
  useEffect(() => {
    const getCharacterList = () => {
      axios.get(`${API_ROOT}${API_PEOPLE}`)
      .then(res => {
        setCharacterList([...res.data]);
      })
      .catch(err => {
        debugger;
      });
    };
    getCharacterList();
  }, []);

  // useEffect(() => {
  //   const getCharacter = (id) => {
  //     axios.get(`${API_ROOT}${API_PEOPLE}${id}/`)
  //     .then(res => {
  //       setCharacter({...res.data});
  //     })
  //     .catch(err => {
  //       debugger;
  //     });
  //   };
  //   getCharacter();
  // }, []);

  // debugger;
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
    <div className="App">
      <h1 className="Header">Characters</h1>
    {characterList.map(li => {
      return <Character key={li.name} info={li} />
    })}
    </div>
  );
}

export default App;
