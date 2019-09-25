/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from "./components/Lesson02";
import App from "./App";

function MyApp() {
  return (
      <div>
        <ul>
          <li>This is it Pancit</li>
          <li>This is it Pancit</li>
          <li>This is it Pancit</li>
        </ul>
      </div>
      <App />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

