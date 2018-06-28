import React, {Component} from 'react';
import withMouse from '../patterns/withMouse';

class ContainerTwo extends Component {

render(){
    const {x,y} = this.props.mouse;
return(<div>
    <h1>HOC</h1>
    <span>Your Mouse is at: {x}, {y}</span>
</div>);
};
}
export default withMouse(ContainerTwo);
