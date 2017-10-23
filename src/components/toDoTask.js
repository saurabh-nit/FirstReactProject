import React, { Component } from 'react';

export class ToDoTask extends Component {



  checkMarked1 = () => {
    console.log('CHECK BOX CLICKED:',this.refs.checkboxValue.value, this.props.info);
    this.props.checkMarked(this.props.info, this.refs.checkboxValue.value);
    this.refs.checkboxValue.checked = false;
  }

  render(){
    var myStyle = {
      fontSize : 20,
      color : "red"
    }
    return (
      <div>
      <span>
      <input id="check" type="checkbox"  onClick={this.checkMarked1} ref="checkboxValue"/>
      <span style={myStyle}> TASK: {this.props.info.task}, STATUS: {this.props.info.status}</span>
      </span>
      </div>
    );
  }

}
