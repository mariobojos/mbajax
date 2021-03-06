/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from "./components/Lesson02";
import App from "./App";

function MyApp() {
  return (
      <div>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
        <App />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

