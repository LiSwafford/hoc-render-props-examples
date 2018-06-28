import React, {Component} from 'react';
import './ContainerThree.css';
import withLoading from '../patterns/withLoading';

const ContainerThree = (props) => {
return(<div className = 'container'>
<div className = 'box'>
<h1>HOC</h1>
{props.loading ? <span>...Loading</span> : <span>{props.data.name}</span>}
</div>
</div>);
};

export default withLoading(ContainerThree);
