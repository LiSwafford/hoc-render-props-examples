import React from 'react';
import './withMouse.css';
//HOC example
const withMouse = Component => {
  return class extends React.Component {
    state = {
      x: 0,
      y: 0
    };
    handleMouseMove = e => this.setState({ x: e.clientX, y: e.clientY });
    render() {
      return (
        <div className="mouse2-area" onMouseMove={e => this.handleMouseMove(e)}>
          <Component
            {...this.props}
            onMouseMove={this.handleMouseMove}
            mouse={this.state}
          />
        </div>
      );
    }
  };
};

export default withMouse;
