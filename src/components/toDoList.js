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
    ]};
    this.doneTask = []
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
        this.doneTask.push(el);
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
        <h2>HELLO TRIAL APP</h2>
        <NewToDoTask onAddNew={this.onAddNewInvoked}/>
        <h3>The Task List</h3>
        <div>
          {
            this.state.taskList.map((info, i)=> <ToDoTask info={info} key={i} checkMarked={this.addedCompleted}/>)
          }
        </div>
        <div>
          <h3>Completed task</h3>
          {
            this.doneTask.map((done, i)=>   <CompletedTask info1={done} key={i}/>)
          }
        </div>
      </div>
    );
  }
}
