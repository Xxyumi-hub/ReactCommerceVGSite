import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

class App extends Component {

  render() { /* homepage */
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Check out what this page is about here:</p>
          <Button variant="contained" color="primary">
            <Link to="/aboutus" style={{color:'white'}}>Go to About page</Link>
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
