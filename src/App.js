import React, { Component } from 'react';
import './App.css';
import Header from './containers/header'
import Content from './containers/header'
import ThemeSwitch from './containers/themeColor'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <ThemeSwitch />
      </div>
    );
  }
}

export default App;
