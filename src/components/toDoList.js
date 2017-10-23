import React, { Component } from 'react';
import {NewToDoTask} from './newTODOTask';
import {ToDoTask} from './toDoTask';
import {CompletedTask} from './completedTask';

export class ToDoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      taskList:[
        {task:'Wake Up In Morning', 'status':'pending'},
        {task:'Do Some Excercise', 'status':'pending'},
        {task:'Go to Station to Catch Train', 'status':'pending'},
        {task:'Buy Tickets', 'status':'pending'},
        {task:'Catch the Train', 'status':'pending'},
        {task:'Come to Office', 'status':'pending'},
        {task:'Do your stuff', 'status':'pending'},
        {task:'Take Lunch', 'status':'pending'},
        {task:'Leave the Office', 'status':'pending'}
      ],
      doneTask:[],
      dataFromAPI: []
    }
  }

  componentDidMount(){
    fetch('https://reqres.in/api/users?page=2')
    .then(results => {
      console.log('RESPONSE:', results);
      return results.json();
    }).then(data =>{
      console.log('.then data:',data);
      this.setState({dataFromAPI: data.data});
      console.log('ARRAY DATA this.dataFromAPI:',this.state.dataFromAPI);
    })
  }

  onAddNewInvoked = (_newTask) => {
    let _oldTasks = this.state.taskList;
    _oldTasks.push({
      task: _newTask, status: 'pending'
    });
    this.setState(_oldTasks);
  }

  addedCompleted = (currentData, value) => {
    let CurrentTaskList = this.state.taskList;
    console.log('currentData', currentData);
    console.log('value', value);
    CurrentTaskList.forEach(el=>{
      if(value === 'on' && currentData.task === el.task){
        el.status = 'Completed';
        this.state.doneTask.push(el);
        console.log('COMPLETE TASK:', this.doneTask);

         let index = CurrentTaskList.indexOf(el);
         console.log('index:',index);
         CurrentTaskList.splice(index, 1);
         this.setState(CurrentTaskList);
       }

    })
  }



  render(){
    return(
      <div className="job-cell">
        <h2>HELLO TRIAL APP</h2><br/>
        <NewToDoTask onAddNew={this.onAddNewInvoked}/>
        <h3>The Task List</h3>
        <div>
          {
            this.state.taskList.map((info, i)=> <ToDoTask info={info} key={i} checkMarked={this.addedCompleted}/>)
          }
        </div>
        <div><br/>
          <h3>Completed task</h3>
          {
            this.state.doneTask.map((done, i)=>   <CompletedTask info1={done} key={i}/>)
          }
        </div>
        <div><br/>
        <h4> More Exploration</h4>
        <div className="fisrtDiv">First</div>
        <div className="secondDiv">Second</div><br/>
        <div className="thirdDiv">Third</div>
        <div className="fourthDiv">Fourth</div>
        </div><br/>
        <h4> DATA FROM API</h4>
        <div>
        <table>
        <thead>
        <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>User Picture</th>
        </tr>
        </thead>
        <tbody>
        {this.state.dataFromAPI.map((done, i)=>
          <tr>
          <td>{done.id}</td>
          <td>{done.first_name}</td>
          <td>{done.last_name}</td>
          <td><img src={done.avatar} alt="Image Not Loaded"/></td>
          </tr>
        )}
        </tbody>
        </table>
        </div>

      </div>
    );
  }
}
