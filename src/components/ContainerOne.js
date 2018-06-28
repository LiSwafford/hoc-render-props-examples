import React, {Component} from 'react';
import Mouse from '../patterns/Mouse';

class ContainerOne extends Component {
constructor(){
super()
this.state = {
}
}
render(){
return(
    <Mouse
          render={({ x, y }) => (
            <div>
              <h1>Render Props</h1>Your Mouse is at: {x}, {y}
            </div>
          )}
        />
);
};
}
export default ContainerOne;
