// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

/* function getButtonText() {
  return 'Klik me';
} */

// Create a react component
const App = () => {
  const buttonText = 'Click Me!'
  return ( 
  <div>
    <label htmlFor="name" className="label">Enter name:</label>
    <input type="text" id="name" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>
    {buttonText}
    </button>
  </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
