import React, { Component } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Weather from './Weather.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <div  className='container-fluid p-0'>
        <Header />
        <Switch>
          <Route path='/weather'>
            <Weather />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App
