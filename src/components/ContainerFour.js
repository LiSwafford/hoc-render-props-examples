import React, {Component} from 'react';
//import your render props pattern
import Planets from '../patterns/Planets';

const ContainerFour = (props) => {
return(<div className = 'container'>
    <Planets render = {({data,loading}) => (<div>
        <h1>Render Props</h1>
        {loading ? <span>...loading</span> : <span>{data.name}</span>}
    </div>)} />
</div>);
};

export default ContainerFour;
