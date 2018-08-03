import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Editor from "./Editor";
import Preview from "./Preview";

class App extends Component {
  render() {
    return (
    <div>
      <Editor id='editor'/>
      <Preview id='preview'/>
    </div>
    );
  }
}

export default App;
