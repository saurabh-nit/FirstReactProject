import React, { Component } from 'react';

export class CompletedTask extends Component {

  constructor(props){
    super(props);
    this.state = this.props.info1
    console.log('INFO:', this.state);
  }

  render(){
    return (<div>
       <span>TASK: {this.props.info1.task}, STATUS: {this.props.info1.status}</span>
    </div>);
  }

}
