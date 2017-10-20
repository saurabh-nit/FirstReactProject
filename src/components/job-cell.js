import React, { Component } from 'react';

export class JobCell extends Component {

  constructor(props){
    super(props);
    this.state = {applied:false};
  }

  onApplyClicked = () => {
    let _oldState = this.state;
    this.setState({applied:true});
  }

  render(){
    return(
      <div className="job-cell">
        <h4>
          {this.props.info.title}
        </h4>
        <h5>
          {this.props.info.category}
        </h5>
        {
          this.state.applied? <span>APPLIED</span>:
          (<button onClick={this.onApplyClicked}>
            Apply
          </button>)
        }

      </div>
    );
  }
}
