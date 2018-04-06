import React, { Component } from 'react';
import Square from './Square';


class SquareLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: ""
    };
  }

  // Event handler functions
  handleClick(i) {
    let b = this.state.buffer;
    b += i;
    while(b.charAt(0) === "0") {
      b = b.substr(1);
    }
    this.setState({buffer: b});
    console.log(this.state.buffer);
  }

  clear() {
    this.setState({buffer: ""})
  }

  // Uses eval() -- yes, I knoew this is unsafe
  evaluate() {
    const b = this.state.buffer;
    // eslint-disable-next-line
    let result = eval(b);
    this.setState({buffer: result});
  }

  // Rendering helper functions
  renderSquare(i, styleName) {
    return (
      <Square
        value={i}
        styleName={styleName}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderClear(i, styleName) {
    return (
      <Square
        value={i}
        styleName={styleName}
        onClick={() => this.clear()}
      />
    )
  }

  renderEqual(i) {
    return (
      <Square
        value={i}
        onClick={() => this.evaluate()}
    />
    )
  }

  render() {
    return (
      <div className="square-layout">
        {this.renderSquare(`${this.state.buffer}`, "--four-columns")}
        {this.renderClear("AC", "--three-columns")}
        {this.renderSquare("/")}
        {this.renderSquare("7")}
        {this.renderSquare("8")}
        {this.renderSquare("9")}
        {this.renderSquare("*")}
        {this.renderSquare("4")}
        {this.renderSquare("5")}
        {this.renderSquare("6")}
        {this.renderSquare("-")}
        {this.renderSquare("1")}
        {this.renderSquare("2")}
        {this.renderSquare("3")}
        {this.renderSquare("+")}
        {this.renderSquare("0", "--two-columns")}
        {this.renderSquare(".")}
        {this.renderEqual("=")}
      </div>
    );
  }
};

export default SquareLayout;