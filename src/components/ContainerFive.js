import React, { Component } from 'react';

class ContainerFive extends Component {
  
        state = {
          text: ''
    }

  handleChange = () => {
    this.setState({text: this.myInput.value})
  };

  render() {
    return (
      <div className="container">
        <h1>Using Refs</h1>
        <input
          ref={node => (this.myInput = node)}
          onChange={() => this.handleChange('text', this.input)}
        />
        <span>{this.state.text}</span>
        <br />
        

        <p>Refs are the React way of getting access to DOM nodes or React elements created in the render method.</p>
       <p>Refs should be used sparingly. </p>
       <p>Refs are just properties on an element that take callbacks.</p>
      </div>
    );
  }
}

export default ContainerFive;
