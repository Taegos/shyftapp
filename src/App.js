import React, {Component} from 'react';
import {SubjectScheduler} from './components/SubjectScheduler'
import './App.css';
import {ShyftApiMock} from "./api/ShyftApiMock";

class App extends Component {
  constructor(props) {
    super(props);
    this.api = new ShyftApiMock();
  }

  render() {
    return <SubjectScheduler dataStore={this.api}/>
  }
}

export default App;
