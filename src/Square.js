import React, { Component } from 'react';

// Why do I need props constructor? (I read about it in the docs but I've already forgotten)
// What is 'super'?
class Square extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value: null
    }
  }

  render() {
    return (
      <div 
        className={`square ${this.props.styleName}`}
        onClick={this.props.onClick}
        >
        <span>{this.props.value}</span>
      </div>
    );
  }
};

export default Square;