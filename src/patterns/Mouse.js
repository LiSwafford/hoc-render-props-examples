import React, {Component} from 'react';
import './Mouse.css';
//using render props
class Mouse extends Component {
    state = {
        x: 0,
        y: 0
    }

    handleMouseMove = (e) => {
        this.setState({x: e.clientX, y: e.clientY});

    }

    render(){
        return (<div className ='mouse-area' onMouseMove = {this.handleMouseMove}>{this.props.render(this.state)}</div>);
    }

}

export default Mouse;