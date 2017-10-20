import React, { Component } from 'react';
import './App.css';
import { JobCell} from './components/job-cell';
import {ToDoList} from './components/toDoList';

class App extends Component {
  render() {

    let jobsData = [
      {title: 'Need Driver for Uber', category:'Driver'},
      {title: 'Need Cook for Office', category:'Chef'},
      {title: 'Need Maid at Home', category:'Cleaner'}
    ]

    return (
      // <div className="App">
      // {jobsData.map((info)=> <JobCell info={info} key={info.title} />)}
      // </div>
      <div className="App">
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
