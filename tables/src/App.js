import React from 'react';
import './App.css';
import Contents from './Contents';
import Home from './Home';
import NavBar from './NavBar';
function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Contents/>
    </div>
  );
}

export default App;
