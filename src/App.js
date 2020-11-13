import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Wrapper from './mui/Wrapper';
import Content from './mui/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>

        <Wrapper><Content/></Wrapper>
      </div>
    );
  }
}

export default hot(module)(App);
