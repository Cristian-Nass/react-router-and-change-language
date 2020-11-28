import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Router>
    </div>
  );
}

export default App;
