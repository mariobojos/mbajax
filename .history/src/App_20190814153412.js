/*jshint esversion:6*/
import React from 'react';
import './App.css';

import PersonList from "./components/PersonList";
import PersonInput from './components/PersonInput';


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <PersonList />
      <PersonInput />
    </div>
  );
}

export default App;
