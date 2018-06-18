import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png"
              className="App-logo"
              alt="logo"
            />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Profile />
        </div>
      </Provider>
    );
  }
}

export default App;
