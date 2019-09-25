/*jshint esversion:6*/
import React from 'react';
import './App.css';

import PersonList from "./components/PersonList";
import PersonInput from './components/PersonInput';
import PersonDelete from './components/PersonDelete';
import FetchStarWars from './components/FetchStarWars';


function App() {
  return (
    <div className="App">
      <h2>Using fetch</h2>
      <FetchStarWars />
      <h2>Using axios</h2>
      <PersonInput />
      <PersonDelete />
      <PersonList />
    </div>
  );
}

export default App;
