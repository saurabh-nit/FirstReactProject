import React, { Component } from 'react';

export class NewToDoTask extends Component {

  constructor(props){
    super(props);
    console.log('this.state:', this.props)
    let taskArray = this.props;
  }

  onAddClicked = () => {
    if(this.props.onAddNew){
      this.props.onAddNew(this.refs.newTastInput.value);
      this.refs.newTastInput.value = '';
    }
  }

  render(){
    return(
      <div className="job-cell">
        <input type = "text" name ="task" ref="newTastInput"/>
        <button onClick={this.onAddClicked}>ADD</button>
      </div>
    );
  }
}
