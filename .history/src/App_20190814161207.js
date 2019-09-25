/*jshint esversion:6*/
import React from 'react';
import './App.css';

import PersonList from "./components/PersonList";
import PersonInput from './components/PersonInput';
import PersonDelete from './components/PersonDelete';


function App() {
  return (
    <div className="App">
      <h2>Using axios</h2>
      <PersonInput />
      <PersonDelete />
      <PersonList />
    </div>
  );
}

export default App;
